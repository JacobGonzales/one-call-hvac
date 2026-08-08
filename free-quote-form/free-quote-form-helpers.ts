export type BookingField =
  | "name"
  | "phone"
  | "email"
  | "address"
  | "zipCode"
  | "city"
  | "state"
  | "service"
  | "subService"
  | "details";

export interface BookingFormValues {
  name: string;
  phone: string;
  email: string;
  address: string;
  zipCode: string;
  city: string;
  state: string;
  service: string;
  subService: string;
  details: string;
}

export interface BookingFormServiceContext {
  defaultService?: string;
  defaultSubService?: string;
  showInlineServiceFields?: boolean;
}

export interface InquiryPayload {
  fullName: string;
  phone: string | null;
  email: string | null;
  message: string;
  termsAccepted: boolean;
  requestedDate: string | null;
  requestedTime: string | null;
  source: string;
}

export const EMPTY_BOOKING_FORM_VALUES: BookingFormValues = {
  name: "",
  phone: "",
  email: "",
  address: "",
  zipCode: "",
  city: "",
  state: "Utah",
  service: "",
  subService: "",
  details: "",
};

const NAME_PATTERN = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CITY_PATTERN = /^[A-Za-z][A-Za-z .'-]{1,79}$/;
const STATE_PATTERN = /^[A-Za-z][A-Za-z ]{1,29}$/;
const ADDRESS_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9#.,'\/\- ]{5,120}$/;
const ZIP_CODE_PATTERN = /^\d{5}$/;

function normalizePhoneDigits(value: string) {
  const digits = value.replace(/\D+/g, "");
  if (digits.length === 11 && digits.startsWith("1")) {
    return digits.slice(1);
  }
  return digits;
}

export function getInitialBookingFormValues(
  context?: Pick<BookingFormServiceContext, "defaultService" | "defaultSubService">,
): BookingFormValues {
  return {
    ...EMPTY_BOOKING_FORM_VALUES,
    service: context?.defaultService ?? "",
    subService: context?.defaultSubService ?? "",
  };
}

export function sanitizeBookingFormField(field: BookingField, value: string) {
  switch (field) {
    case "name":
      return value.replace(/[^A-Za-z\s]/g, "").replace(/\s{2,}/g, " ").slice(0, 100);
    case "phone":
      return value.replace(/\D+/g, "").slice(0, 10);
    case "zipCode":
      return value.replace(/\D+/g, "").slice(0, 5);
    case "city":
      return value.replace(/[^A-Za-z .'-]/g, "").slice(0, 80);
    default:
      return value;
  }
}

export function validateBookingForm(
  values: BookingFormValues,
) {
  const errors: Partial<Record<BookingField, string>> = {};
  const phoneDigits = normalizePhoneDigits(values.phone);
  const name = values.name.trim();
  const email = values.email.trim();
  const address = values.address.trim();
  const zipCode = values.zipCode.trim();
  const city = values.city.trim();
  const state = values.state.trim();
  const details = values.details.trim();

  if (!name) {
    errors.name = "Enter your name.";
  } else if (!NAME_PATTERN.test(name)) {
    errors.name = "Enter a valid name.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Enter your phone number.";
  } else if (phoneDigits.length !== 10) {
    errors.phone = "Enter a valid 10-digit phone number.";
  }

  if (!email) {
    errors.email = "Enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (address && !ADDRESS_PATTERN.test(address)) {
    errors.address = "Enter a valid street address with a street number.";
  }

  if (zipCode && !ZIP_CODE_PATTERN.test(zipCode)) {
    errors.zipCode = "Enter a valid 5-digit ZIP code.";
  }

  if (city && !CITY_PATTERN.test(city)) {
    errors.city = "Enter a valid city.";
  }

  if (state && !STATE_PATTERN.test(state)) {
    errors.state = "Enter a valid state.";
  }

  if (details && (details.length < 5 || !/[A-Za-z]/.test(details))) {
    errors.details = "Enter a more complete description.";
  }

  return errors;
}

export function formatLocalDate(value: Date) {
  const year = value.getFullYear();
  const month = `${value.getMonth() + 1}`.padStart(2, "0");
  const day = `${value.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function buildInquiryPayload(
  values: BookingFormValues,
): InquiryPayload {
  const name = values.name.trim();
  const address = values.address.trim();
  const service = values.service.trim();
  const subService = values.subService.trim();
  const details = values.details.trim() || "N/A";
  const zip = values.zipCode.trim();
  const city = values.city.trim();
  const state = values.state.trim();
  const hasSpecificLocationContext = Boolean(address || city || zip);
  const locationLine = hasSpecificLocationContext
    ? [address, city, state, zip].filter(Boolean).join(", ")
    : "";
  const messageLines = [
    ...(locationLine ? [`Address: ${locationLine}`] : []),
    ...(service ? [`Requested service: ${service}`] : []),
    ...(subService ? [`Requested sub service: ${subService}`] : []),
    ...(details !== "N/A" ? [`Description: ${details}`] : []),
  ];

  return {
    fullName: name,
    phone: values.phone.trim() || null,
    email: values.email.trim() || null,
    message: messageLines.join("\n") || "No additional details provided.",
    termsAccepted: true,
    requestedDate: null,
    requestedTime: null,
    source: "free-quote-form",
  };
}

