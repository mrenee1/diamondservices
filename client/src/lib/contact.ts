/** Shared contact info — use for tel, sms, and mailto links sitewide */

export type PhoneContact = {
  tel: string;
  sms: string;
  display: string;
};

export const CONTACT = {
  mike: {
    tel: "tel:+18563713971",
    sms: "sms:+18563713971",
    display: "856-371-3971",
  },
  lydine: {
    tel: "tel:+18569810930",
    sms: "sms:+18569810930",
    display: "856-981-0930",
  },
  email: "diamondhomeservicesofflorida@gmail.com",
  mailto: "mailto:diamondhomeservicesofflorida@gmail.com",
} as const;
