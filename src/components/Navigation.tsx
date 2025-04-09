import { mainNav } from "@/data/menu.json"

export function Navigation() {
  return (
    <nav>
      <ul className="flex gap-6">
        {mainNav.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
} 