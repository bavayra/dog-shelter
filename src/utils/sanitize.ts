export function sanitizeFormData(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): typeof data {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone.trim(),
    message: data.message.trim(),
  };
}
