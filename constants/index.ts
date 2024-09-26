import drgreen from "@/public/assets/images/dr-green.png";
import drcameron from "@/public/assets/images/dr-cameron.png";
import drlivingston from "@/public/assets/images/dr-livingston.png";
import drpeter from "@/public/assets/images/dr-peter.png";
import drpowell from "@/public/assets/images/dr-powell.png";
import drremirez from "@/public/assets/images/dr-remirez.png";
import drlee from "@/public/assets/images/dr-lee.png";
import drcruz from "@/public/assets/images/dr-cruz.png";
import drsharma from "@/public/assets/images/dr-sharma.png";
export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: drgreen,
    name: "John Green",
  },
  {
    image: drcameron,
    name: "Leila Cameron",
  },
  {
    image: drlivingston,
    name: "David Livingston",
  },
  {
    image: drpeter,
    name: "Evan Peter",
  },
  {
    image: drpowell,
    name: "Jane Powell",
  },
  {
    image: drremirez,
    name: "Alex Ramirez",
  },
  {
    image: drlee,
    name: "Jasmine Lee",
  },
  {
    image: drcruz,
    name: "Alyana Cruz",
  },
  {
    image: drsharma,
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "@/public/assets/icons/check.svg",
  pending: "@/public/assets/icons/pending.svg",
  cancelled: "@/public/assets/icons/cancelled.svg",
};
