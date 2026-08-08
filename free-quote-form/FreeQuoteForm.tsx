"use client";

import React, { type FormEvent, type InputHTMLAttributes, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Alert, Checkbox, FormControlLabel, FormHelperText, MenuItem, TextField } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  buildInquiryPayload,
  type BookingField,
  type BookingFormServiceContext,
  type BookingFormValues,
  getInitialBookingFormValues,
  sanitizeBookingFormField,
  validateBookingForm,
} from "./free-quote-form-helpers";

export interface FreeQuoteServiceOption {
  label: string;
  subServices?: readonly string[];
}

export interface FreeQuoteFormProps {
  copy?: Partial<BookingFormCopy>;
  defaultMoreInfoOpen?: boolean;
  serviceContext?: BookingFormServiceContext;
  serviceOptions?: readonly FreeQuoteServiceOption[];
}

interface BookingFormCopy {
  title: string;
  nameHelperText: string;
  emailHelperText: string;
  serviceHelperText: string;
  addressHelperText: string;
  detailsHelperText: string;
  detailsPlaceholder: string;
  submitLabel: string;
  submittingLabel: string;
}

const DEFAULT_BOOKING_FORM_COPY: BookingFormCopy = {
  title: "Book a Free Quote Now!",
  nameHelperText: "Enter the full name for the quote request.",
  emailHelperText: "We'll send your quote confirmation and follow-up here.",
  serviceHelperText: "Optional, but choosing a service helps us route your request faster.",
  addressHelperText: "Optional, but a street address helps us understand the property.",
  detailsHelperText: "Optional. Share symptoms, urgency, or access details if helpful.",
  detailsPlaceholder: "Share any extra details about the issue, symptoms, or access.",
  submitLabel: "Submit & Continue",
  submittingLabel: "Submitting...",
};

const DEFAULT_SERVICE_OPTIONS: readonly FreeQuoteServiceOption[] = [
  { label: "Drain Cleaning" },
  { label: "Hydro Jetting" },
  { label: "Sewer Camera Inspection" },
  { label: "Sewer Cleaning And Maintenance" },
  { label: "Sewer Line Repair And Replacement" },
  { label: "Other" },
];

export function FreeQuoteForm({
  copy,
  defaultMoreInfoOpen = false,
  serviceContext,
  serviceOptions = DEFAULT_SERVICE_OPTIONS,
}: FreeQuoteFormProps) {
  const formCopy = { ...DEFAULT_BOOKING_FORM_COPY, ...copy };
  const showInlineServiceFields = Boolean(serviceContext?.showInlineServiceFields);
  const sortedServiceOptions = useMemo(
    () => [...serviceOptions].sort((left, right) => left.label.localeCompare(right.label)),
    [serviceOptions],
  );
  const subServiceOptionsByService = useMemo(
    () =>
      new Map(
        serviceOptions.map((service) => [
          service.label,
          [...(service.subServices ?? [])]
            .sort((left, right) => left.localeCompare(right))
            .map((label) => ({ label })),
        ]),
      ),
    [serviceOptions],
  );
  const defaultFormValues = useMemo(
    () =>
      getInitialBookingFormValues({
        defaultService: serviceContext?.defaultService,
        defaultSubService: serviceContext?.defaultSubService,
      }),
    [serviceContext?.defaultService, serviceContext?.defaultSubService],
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [touchedFields, setTouchedFields] = useState<Partial<Record<BookingField, boolean>>>({});
  const [formValues, setFormValues] = useState<BookingFormValues>(() => defaultFormValues);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsTouched, setTermsTouched] = useState(false);
  const [moreInfoOpen, setMoreInfoOpen] = useState(defaultMoreInfoOpen);
  const submitErrorRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const subServiceOptions = useMemo(
    () => subServiceOptionsByService.get(formValues.service) ?? [],
    [formValues.service, subServiceOptionsByService],
  );
  const subServicePlaceholder = !formValues.service
    ? "Select a service first"
    : subServiceOptions.length > 0
      ? "Select a sub service"
      : "No sub services for this selection";
  const isSubServiceDisabled = !formValues.service || subServiceOptions.length === 0;

  const validationErrors = useMemo(
    () => validateBookingForm(formValues),
    [formValues],
  );
  const isFormValid = useMemo(
    () => Object.keys(validationErrors).length === 0,
    [validationErrors],
  );

  useEffect(() => {
    setFormValues(defaultFormValues);
    setTouchedFields({});
    setTermsAccepted(false);
    setTermsTouched(false);
  }, [defaultFormValues]);

  useEffect(() => {
    if (submitError) {
      submitErrorRef.current?.focus();
    }
  }, [submitError]);

  const markFieldTouched = (field: BookingField) => {
    setTouchedFields((previous) => ({ ...previous, [field]: true }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid) {
      setTouchedFields({
        name: true,
        phone: true,
        email: true,
        address: true,
        zipCode: true,
        city: true,
        service: true,
        details: true,
        state: true,
      });
      setSubmitError("Please fix the highlighted fields before submitting.");
      return;
    }

    if (!termsAccepted) {
      setTermsTouched(true);
      setSubmitError("You must accept the Privacy Policy and Terms of Service before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);
    setSubmitError(null);

    const payload = buildInquiryPayload(formValues);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(payload?.error ?? "Unable to submit your request.");
      }

      const successPayload = (await response.json().catch(() => null)) as {
        data?: {
          customerConfirmationSent?: boolean;
        };
      } | null;

      const customerConfirmationSent = Boolean(
        successPayload?.data?.customerConfirmationSent,
      );

      setFormValues(defaultFormValues);
      setTouchedFields({});
      setTermsAccepted(false);
      setTermsTouched(false);
      setSubmitMessage(
        customerConfirmationSent
          ? "Thanks. Your free quote request was received. Check your email for next steps."
          : "Thanks. Your free quote request was received and queued for review.",
      );
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to submit your request.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFieldChange = (field: BookingField, value: string) => {
    setFormValues((previous) => ({
      ...previous,
      [field]: sanitizeBookingFormField(field, value),
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormValues((previous) => ({
      ...previous,
      service: value,
      subService: "",
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-[#c1c5c8] bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-6"
    >
      <h2 className="text-xl font-bold text-[#394670] sm:text-2xl">
        {formCopy.title}
      </h2>

      <div className="grid gap-3 sm:grid-cols-2">
        <QuoteTextField
          field="name"
          formValues={formValues}
          label="Name"
          onBlur={markFieldTouched}
          onChange={handleFieldChange}
          touchedFields={touchedFields}
          validationErrors={validationErrors}
          autoComplete="name"
          helperText={formCopy.nameHelperText}
          required
          className="sm:col-span-2"
          maxLength={100}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <QuoteTextField
          field="phone"
          formValues={formValues}
          label="Phone number"
          onBlur={markFieldTouched}
          onChange={handleFieldChange}
          touchedFields={touchedFields}
          validationErrors={validationErrors}
          autoComplete="tel"
          helperText="Enter the best 10-digit number to reach you."
          required
          type="tel"
          inputMode="numeric"
          maxLength={10}
        />
        <QuoteTextField
          field="email"
          formValues={formValues}
          label="Email address"
          onBlur={markFieldTouched}
          onChange={handleFieldChange}
          touchedFields={touchedFields}
          validationErrors={validationErrors}
          autoComplete="email"
          helperText={formCopy.emailHelperText}
          required
          type="email"
        />
      </div>

      {showInlineServiceFields ? (
        <div className="grid gap-3 sm:grid-cols-2">
          <QuoteSelectField
            field="service"
            label="Service needed"
            value={formValues.service}
            onBlur={markFieldTouched}
            onChange={handleServiceChange}
            touchedFields={touchedFields}
            validationErrors={validationErrors}
            helperText={formCopy.serviceHelperText}
            options={sortedServiceOptions.map((service) => service.label)}
            placeholder="Select a service"
          />
          <QuoteSelectField
            field="subService"
            label="Sub service"
            value={formValues.subService}
            onBlur={markFieldTouched}
            onChange={(value) => handleFieldChange("subService", value)}
            touchedFields={touchedFields}
            validationErrors={validationErrors}
            disabled={isSubServiceDisabled}
            helperText={subServicePlaceholder}
            options={subServiceOptions.map((subService) => subService.label)}
            placeholder={subServicePlaceholder}
          />
        </div>
      ) : null}

      <div className="mt-2 rounded-md border border-[#c1c5c8] bg-white">
        <button
          type="button"
          onClick={() => setMoreInfoOpen((previous) => !previous)}
          className="flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm font-bold text-[#394670]"
          aria-expanded={moreInfoOpen}
        >
          <span>More information helps us work with you faster, but it is totally okay to skip this part.</span>
          <motion.span
            aria-hidden="true"
            animate={prefersReducedMotion ? undefined : { rotate: moreInfoOpen ? 180 : 0 }}
            transition={{ duration: 0.18 }}
          >
            <ExpandMoreRoundedIcon sx={{ fontSize: 20 }} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {moreInfoOpen ? (
            <motion.div
              key="more-info-panel"
              initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
              animate={prefersReducedMotion ? {} : { height: "auto", opacity: 1 }}
              exit={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-5 border-t border-[#c1c5c8] px-3 py-3 sm:px-4">
                <QuoteTextField
                  field="address"
                  formValues={formValues}
                  label="Address"
                  onBlur={markFieldTouched}
                  onChange={handleFieldChange}
                  touchedFields={touchedFields}
                  validationErrors={validationErrors}
                  autoComplete="street-address"
                  helperText={formCopy.addressHelperText}
                  placeholder="Street address"
                />

                <div className="grid gap-3 sm:grid-cols-3">
                  <QuoteTextField
                    field="zipCode"
                    formValues={formValues}
                    label="Zip code"
                    onBlur={markFieldTouched}
                    onChange={handleFieldChange}
                    touchedFields={touchedFields}
                    validationErrors={validationErrors}
                    autoComplete="postal-code"
                    helperText="Optional ZIP code."
                    inputMode="numeric"
                    maxLength={5}
                    placeholder="ZIP code"
                  />
                  <QuoteTextField
                    field="city"
                    formValues={formValues}
                    label="City"
                    onBlur={markFieldTouched}
                    onChange={handleFieldChange}
                    touchedFields={touchedFields}
                    validationErrors={validationErrors}
                    autoComplete="address-level2"
                    helperText="Optional city."
                    placeholder="City"
                  />
                  <TextField
                    color="success"
                    disabled
                    fullWidth
                    helperText="State is fixed for this service area."
                    label="State"
                    value={formValues.state}
                    variant="filled"
                    slotProps={{
                      input: { disableUnderline: true },
                      formHelperText: { sx: { marginLeft: 0, marginRight: 0 } },
                    }}
                    sx={getQuoteFieldSx(true)}
                  />
                </div>

                {showInlineServiceFields ? null : (
                  <QuoteSelectField
                    field="service"
                    label="Service needed"
                    value={formValues.service}
                    onBlur={markFieldTouched}
                    onChange={handleServiceChange}
                    touchedFields={touchedFields}
                    validationErrors={validationErrors}
                    helperText={formCopy.serviceHelperText}
                    options={sortedServiceOptions.map((service) => service.label)}
                    placeholder="Select a service"
                  />
                )}

                <QuoteTextField
                  field="details"
                  formValues={formValues}
                  label="Description"
                  onBlur={markFieldTouched}
                  onChange={handleFieldChange}
                  touchedFields={touchedFields}
                  validationErrors={validationErrors}
                  helperText={formCopy.detailsHelperText}
                  multiline
                  minRows={3}
                  placeholder={formCopy.detailsPlaceholder}
                />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="space-y-1">
        <FormControlLabel
          control={
            <Checkbox
              checked={termsAccepted}
              onChange={(event) => {
                setTermsAccepted(event.target.checked);
                setTermsTouched(true);
              }}
              sx={{ alignSelf: "center" }}
            />
          }
          label={
            <span className="text-sm leading-6 text-[#394670]">
              I agree to the{" "}
              <Link href="/privacy-policy" className="font-semibold underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms-of-service" className="font-semibold underline">
                Terms of Service
              </Link>
              .
            </span>
          }
          sx={{
            alignItems: "center",
            margin: 0,
          }}
        />
        {termsTouched && !termsAccepted ? (
          <FormHelperText error sx={{ margin: 0 }}>
            You must accept the Privacy Policy and Terms of Service before submitting.
          </FormHelperText>
        ) : termsAccepted ? (
          <FormHelperText sx={{ margin: 0, color: "#2e7d32" }}>Looks good.</FormHelperText>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !isFormValid || !termsAccepted}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#7892aa] py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#394670] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7892aa] disabled:cursor-not-allowed disabled:bg-[#c1c5c8] disabled:text-white/80"
      >
        {isSubmitting ? (
          <>
            <AutorenewRoundedIcon sx={{ fontSize: 18 }} />
            {formCopy.submittingLabel}
          </>
        ) : (
          <>
            <SendRoundedIcon sx={{ fontSize: 18 }} />
            {formCopy.submitLabel}
          </>
        )}
      </button>

      {submitMessage ? (
        <Alert severity="success" variant="filled" sx={{ borderRadius: "12px" }}>
          {submitMessage}
        </Alert>
      ) : null}

      {submitError ? (
        <div ref={submitErrorRef} tabIndex={-1}>
          <Alert severity="error" variant="filled" sx={{ borderRadius: "12px" }}>
            {submitError}
          </Alert>
        </div>
      ) : null}
    </form>
  );
}

function QuoteTextField({
  autoComplete,
  className,
  field,
  formValues,
  helperText,
  inputMode,
  label,
  maxLength,
  minRows,
  multiline = false,
  onBlur,
  onChange,
  placeholder,
  required = false,
  touchedFields,
  type = "text",
  validationErrors,
}: {
  autoComplete?: string;
  className?: string;
  field: BookingField;
  formValues: BookingFormValues;
  helperText: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
  label: string;
  maxLength?: number;
  minRows?: number;
  multiline?: boolean;
  onBlur: (field: BookingField) => void;
  onChange: (field: BookingField, value: string) => void;
  placeholder?: string;
  required?: boolean;
  touchedFields: Partial<Record<BookingField, boolean>>;
  type?: string;
  validationErrors: Partial<Record<BookingField, string>>;
}) {
  const hasError = Boolean(touchedFields[field] && validationErrors[field]);
  const hasSuccess = Boolean(
    touchedFields[field] &&
      !validationErrors[field] &&
      String(formValues[field]).trim().length > 0,
  );

  return (
    <div className={className}>
      <TextField
        autoComplete={autoComplete}
        color={hasSuccess ? "success" : "primary"}
        error={hasError}
        fullWidth
        helperText={hasError ? validationErrors[field] : hasSuccess ? "Looks good." : helperText}
        inputMode={inputMode}
        label={label}
        minRows={minRows}
        multiline={multiline}
        onBlur={() => onBlur(field)}
        onChange={(event) => onChange(field, event.target.value)}
        placeholder={placeholder}
        required={required}
        type={type}
        value={formValues[field]}
        variant="filled"
      slotProps={{
        input: { disableUnderline: true },
        htmlInput: maxLength ? { maxLength } : undefined,
        formHelperText: { sx: { marginLeft: 0, marginRight: 0 } },
      }}
      sx={getQuoteFieldSx(hasSuccess)}
    />
  </div>
  );
}

function QuoteSelectField({
  disabled = false,
  field,
  helperText,
  label,
  onBlur,
  onChange,
  options,
  placeholder,
  touchedFields,
  validationErrors,
  value,
}: {
  disabled?: boolean;
  field: BookingField;
  helperText: string;
  label: string;
  onBlur: (field: BookingField) => void;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  touchedFields: Partial<Record<BookingField, boolean>>;
  validationErrors: Partial<Record<BookingField, string>>;
  value: string;
}) {
  const hasError = Boolean(touchedFields[field] && validationErrors[field]);
  const hasSuccess = Boolean(touchedFields[field] && !validationErrors[field] && value.trim());

  return (
    <TextField
      color={hasSuccess ? "success" : "primary"}
      disabled={disabled}
      error={hasError}
      fullWidth
      helperText={hasError ? validationErrors[field] : hasSuccess ? "Looks good." : helperText}
      label={label}
      onBlur={() => onBlur(field)}
      onChange={(event) => onChange(event.target.value)}
      select
      value={value}
      variant="filled"
      slotProps={{
        input: { disableUnderline: true },
        formHelperText: { sx: { marginLeft: 0, marginRight: 0 } },
      }}
      sx={getQuoteFieldSx(hasSuccess)}
    >
      <MenuItem value="">{placeholder}</MenuItem>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}

function getQuoteFieldSx(hasSuccess: boolean) {
  return {
    "& .MuiFilledInput-root": {
      backgroundColor: hasSuccess ? "#f4fbf6" : "#f7f9fb",
      border: `1px solid ${hasSuccess ? "#2e7d32" : "#c1c5c8"}`,
      borderRadius: "12px",
      overflow: "hidden",
      transition: "box-shadow 0.18s ease, border-color 0.18s ease, background-color 0.18s ease",
    },
    "& .MuiFilledInput-root.Mui-focused": {
      backgroundColor: "#fff",
      borderColor: "#1a73e8",
      boxShadow: "0 0 0 4px rgba(26, 115, 232, 0.14)",
    },
    "& .MuiFilledInput-root.Mui-error": {
      backgroundColor: "#fff7f7",
      borderColor: "#d32f2f",
    },
    "& .MuiInputLabel-root": {
      color: hasSuccess ? "#2e7d32" : "#394670",
      fontWeight: 600,
    },
    "& .MuiFormHelperText-root": {
      color: hasSuccess ? "#2e7d32" : "#60708a",
      fontSize: "0.75rem",
    },
  };
}
