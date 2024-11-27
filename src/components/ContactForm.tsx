import { Button } from '@/components/Button'

interface FormFields {
  NAME: {
    label: string
    placeholder: string
  }
  EMAIL: {
    label: string
    placeholder: string
  }
  PHONE: {
    label: string
    placeholder: string
  }
  MESSAGE: {
    label: string
    placeholder: string
  }
}

interface ContactFormProps {
  fields: FormFields
  submitText?: string
}

export function ContactForm({ fields, submitText = 'Submit' }: ContactFormProps) {
  return (
    <form className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-light mb-2"
          >
            {fields.NAME.label}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-dark/50 rounded-lg p-4 text-light border border-light/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            placeholder={fields.NAME.placeholder}
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-light mb-2"
          >
            {fields.EMAIL.label}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-dark/50 rounded-lg p-4 text-light border border-light/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            placeholder={fields.EMAIL.placeholder}
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-light mb-2"
        >
          {fields.PHONE.label}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full bg-dark/50 rounded-lg p-4 text-light border border-light/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          placeholder={fields.PHONE.placeholder}
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-light mb-2"
        >
          {fields.MESSAGE.label}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full bg-dark/50 rounded-lg p-4 text-light border border-light/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          placeholder={fields.MESSAGE.placeholder}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        {submitText}
      </Button>
    </form>
  )
}
