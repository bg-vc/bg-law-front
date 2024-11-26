interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export default function PageHeader({
  title,
  description,
  className = '',
}: PageHeaderProps) {
  return (
    <div className={`max-w-4xl mx-auto text-center mb-16 ${className}`}>
      <h1 className="text-4xl md:text-5xl mb-6">
        {title}
      </h1>
      {description && (
        <p className="text-light text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
