"use client"

export default function StatCard({ title, value, subtitle, icon, trend }) {
  const isTrendUp = trend && trend > 0

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-muted-foreground text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold text-foreground mt-2">{value}</h3>
          <p className="text-muted-foreground text-xs mt-2">{subtitle}</p>
        </div>
        <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-2xl">
          {icon}
        </div>
      </div>
      {trend !== undefined && (
        <div className="flex items-center gap-2 mt-4">
          <span className={`text-lg ${isTrendUp ? "text-green-500" : "text-red-500"}`}>{isTrendUp ? "📈" : "📉"}</span>
          <span className={`text-xs font-medium ${isTrendUp ? "text-green-500" : "text-red-500"}`}>
            {Math.abs(trend)}% {isTrendUp ? "increase" : "decrease"}
          </span>
        </div>
      )}
    </div>
  )
}
