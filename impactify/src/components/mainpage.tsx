/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/hxLc9e1jCyA
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function mainPage() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" prefetch={false}>
            <LogInIcon className="w-8 h-8" />
            <span className="sr-only">Impactify</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:text-primary-foreground/80" prefetch={false}>
              Events
            </Link>
            <Link href="#" className="hover:text-primary-foreground/80" prefetch={false}>
              Partners
            </Link>
            <Link href="#" className="hover:text-primary-foreground/80" prefetch={false}>
              Analytics
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@username" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="hidden md:block">John Doe</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[240px_1fr] bg-background">
        <div className="bg-muted border-r hidden md:block">
          <nav className="p-6 grid gap-4">
            <Link href="#" className="flex items-center gap-2 hover:text-primary" prefetch={false}>
              <CalendarIcon className="w-5 h-5" />
              Events
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-primary" prefetch={false}>
              <UsersIcon className="w-5 h-5" />
              Partners
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-primary" prefetch={false}>
              <BarChartIcon className="w-5 h-5" />
              Analytics
            </Link>
          </nav>
        </div>
        <div className="p-6 md:p-10">
          <div className="grid gap-8">
            <div>
              <h1 className="text-2xl font-bold">Welcome to Impactify</h1>
              <p className="text-muted-foreground">Your all-in-one event management platform.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Create an Event</CardTitle>
                  <CardDescription>Easily plan and manage your events.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <Input placeholder="Event Name" />
                    <div className="grid md:grid-cols-2 gap-4">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <CalendarDaysIcon className="mr-2 h-4 w-4" />
                            <span>Select Date</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0">
                          <Calendar />
                        </PopoverContent>
                      </Popover>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <ClockIcon className="mr-2 h-4 w-4" />
                            <span>Select Time</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0">
                          <div className="grid grid-cols-2 gap-2 p-2">
                            <Button variant="ghost" className="justify-start">
                              9:00 AM
                            </Button>
                            <Button variant="ghost" className="justify-start">
                              10:00 AM
                            </Button>
                            <Button variant="ghost" className="justify-start">
                              11:00 AM
                            </Button>
                            <Button variant="ghost" className="justify-start">
                              12:00 PM
                            </Button>
                            <Button variant="ghost" className="justify-start">
                              1:00 PM
                            </Button>
                            <Button variant="ghost" className="justify-start">
                              2:00 PM
                            </Button>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Event Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conference">Conference</SelectItem>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="party">Party</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Event Description" />
                    <Input placeholder="Location" />
                    <Button type="submit" className="justify-self-start">
                      Create Event
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Find Event Partners</CardTitle>
                  <CardDescription>Browse our curated list of event partners.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <Input placeholder="Search partners" />
                    <div className="grid gap-4">
                      <Link
                        href="#"
                        className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5"
                        prefetch={false}
                      >
                        <div className="rounded-md bg-primary p-2 text-primary-foreground">
                          <BuildingIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-medium">Venues</div>
                          <div className="text-muted-foreground text-sm">Find the perfect event venue</div>
                        </div>
                      </Link>
                      <Link
                        href="#"
                        className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5"
                        prefetch={false}
                      >
                        <div className="rounded-md bg-primary p-2 text-primary-foreground">
                          <HandPlatterIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-medium">Catering</div>
                          <div className="text-muted-foreground text-sm">Delicious food for your event</div>
                        </div>
                      </Link>
                      <Link
                        href="#"
                        className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5"
                        prefetch={false}
                      >
                        <div className="rounded-md bg-primary p-2 text-primary-foreground">
                          <MicIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-medium">Entertainment</div>
                          <div className="text-muted-foreground text-sm">
                            Engage your guests with live music or performances
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Booking and Scheduling</CardTitle>
                  <CardDescription>Easily book and schedule event services.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5">
                      <div className="rounded-md bg-primary p-2 text-primary-foreground">
                        <CalendarDaysIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Event Calendar</div>
                        <div className="text-muted-foreground text-sm">View and manage your event schedule</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5">
                      <div className="rounded-md bg-primary p-2 text-primary-foreground">
                        <TicketIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Booking System</div>
                        <div className="text-muted-foreground text-sm">Book event services with ease</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Analytics and Reporting</CardTitle>
                  <CardDescription>Gain insights to optimize your events.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5">
                      <div className="rounded-md bg-primary p-2 text-primary-foreground">
                        <BarChartIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Event Analytics</div>
                        <div className="text-muted-foreground text-sm">Track key metrics and KPIs</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5">
                      <div className="rounded-md bg-primary p-2 text-primary-foreground">
                        <FileTextIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Reporting</div>
                        <div className="text-muted-foreground text-sm">Generate custom reports</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}


function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function FileTextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}


function HandPlatterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3V2" />
      <path d="M5 10a7.1 7.1 0 0 1 14 0" />
      <path d="M4 10h16" />
      <path d="M2 14h12a2 2 0 1 1 0 4h-2" />
      <path d="m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18" />
      <path d="M5 14v7H2" />
    </svg>
  )
}


function LogInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}


function TicketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
