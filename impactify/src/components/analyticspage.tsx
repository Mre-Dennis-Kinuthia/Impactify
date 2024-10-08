/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/QfZFdriPNQh
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

export function analyticsPage() {
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
              <h1 className="text-2xl font-bold">Analytics</h1>
              <p className="text-muted-foreground">Gain insights to optimize your events.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Event Metrics</CardTitle>
                  <CardDescription>Track key performance indicators for your events.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5">
                      <div className="rounded-md bg-primary p-2 text-primary-foreground">
                        <UsersIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Attendee Count</div>
                        <div className="text-muted-foreground text-sm">Track the number of attendees</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5">
                      <div className="rounded-md bg-primary p-2 text-primary-foreground">
                        <TicketIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Ticket Sales</div>
                        <div className="text-muted-foreground text-sm">Monitor ticket sales and revenue</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5">
                      <div className="rounded-md bg-primary p-2 text-primary-foreground">
                        <BarChartIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Engagement</div>
                        <div className="text-muted-foreground text-sm">Measure audience engagement</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Reporting</CardTitle>
                  <CardDescription>Generate custom reports to analyze your event data.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5">
                      <div className="rounded-md bg-primary p-2 text-primary-foreground">
                        <FileTextIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Event Reports</div>
                        <div className="text-muted-foreground text-sm">Create custom reports for your events</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5">
                      <div className="rounded-md bg-primary p-2 text-primary-foreground">
                        <DownloadIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Export Data</div>
                        <div className="text-muted-foreground text-sm">Download your event data in various formats</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Insights</CardTitle>
                  <CardDescription>Understand your event audience and their behavior.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5">
                      <div className="rounded-md bg-primary p-2 text-primary-foreground">
                        <InfoIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Demographic Analysis</div>
                        <div className="text-muted-foreground text-sm">Understand your audience demographics</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5">
                      <div className="rounded-md bg-primary p-2 text-primary-foreground">
                        <ActivityIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Audience Behavior</div>
                        <div className="text-muted-foreground text-sm">Analyze attendee behavior and engagement</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Visualizations</CardTitle>
                  <CardDescription>Explore your event data through interactive charts and graphs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5">
                      <div className="rounded-md bg-primary p-2 text-primary-foreground">
                        <BarChartIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Event Analytics</div>
                        <div className="text-muted-foreground text-sm">Visualize key event metrics</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[48px_1fr] items-center gap-4 p-4 rounded-md bg-muted hover:bg-muted-foreground/5">
                      <div className="rounded-md bg-primary p-2 text-primary-foreground">
                        <LineChartIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Trend Analysis</div>
                        <div className="text-muted-foreground text-sm">
                          Identify trends and patterns in your event data
                        </div>
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

function ActivityIcon(props) {
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
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


function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
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


function InfoIcon(props) {
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
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function LineChartIcon(props) {
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
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
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
