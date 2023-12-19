
import { Switch } from 'components/ui/switch'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useCallback } from 'react'

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  console.log(theme, resolvedTheme)

  const handleToggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, setTheme])

  return (
    <div className="flex items-center gap-1">
      <Moon className="w-5 text-ionic" />
      <Switch
        checked={resolvedTheme === 'light'}
        onCheckedChange={handleToggleTheme}
      />
      <Sun className="w-5 text-ionic" />
    </div>
  )
}
