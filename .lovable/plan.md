

## Plan: Integrate EmailJS with Contact Form

Since the EmailJS public key, template ID, and service ID are all public/client-side credentials, they can be stored directly in the codebase.

### Changes

1. **Install `@emailjs/browser` package** as a dependency.

2. **Update `src/components/ContactSection.tsx`**:
   - Import `emailjs` from `@emailjs/browser`
   - Replace the mock `handleSubmit` with a real EmailJS `send` call using:
     - Service ID: `service_7nzh5tg`
     - Template ID: `template_42d9pc2`
     - Public Key: `unIadKTxHEH5yDd-y`
   - Send template params: `{ from_name, from_email, message }` (matching typical EmailJS template variables)
   - Add loading state to disable the button and show a spinner while sending
   - Handle success with a toast and form reset
   - Handle errors with an error toast

