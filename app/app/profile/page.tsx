"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, Mail, Shield, Bell, Palette, LogOut, Save, TrendingUp } from "lucide-react"

const user = {
  name: "Aarav Sharma",
  email: "aarav@example.com",
  joined: "September 2025",
  level: 5,
  title: "Intermediate Learner",
  xp: 2450,
  riskProfile: "Moderate",
  experience: "Some knowledge",
  goals: ["Build a long-term portfolio", "Learn about mutual funds & SIPs", "Tax-saving investments"],
}

export default function ProfilePage() {
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Profile & Settings</h1>
        <p className="text-muted-foreground">Manage your account, preferences, and notification settings.</p>
      </div>

      {/* Profile Header */}
      <Card>
        <CardContent className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:items-start">
          <Avatar className="h-20 w-20">
            <AvatarFallback className="bg-primary text-2xl text-primary-foreground">AS</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold text-foreground">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <Badge variant="secondary">Level {user.level} - {user.title}</Badge>
              <Badge variant="outline">{user.xp.toLocaleString()} XP</Badge>
              <Badge variant="outline">Joined {user.joined}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="mt-4 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <User className="h-4 w-4 text-primary" /> Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <Button className="w-fit"><Save className="mr-1 h-4 w-4" /> Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <TrendingUp className="h-4 w-4 text-primary" /> Investment Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label className="text-xs text-muted-foreground">Risk Profile</Label>
                  <p className="mt-1 text-sm font-medium text-foreground">{user.riskProfile}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Experience Level</Label>
                  <p className="mt-1 text-sm font-medium text-foreground">{user.experience}</p>
                </div>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">Learning Goals</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {user.goals.map((g) => (
                    <Badge key={g} variant="secondary">{g}</Badge>
                  ))}
                </div>
              </div>
              <Button variant="outline" className="w-fit">Retake Onboarding Quiz</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Shield className="h-4 w-4 text-primary" /> Security
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Password</p>
                  <p className="text-xs text-muted-foreground">Last changed 30 days ago</p>
                </div>
                <Button variant="outline" size="sm">Change</Button>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Two-Factor Auth</p>
                  <p className="text-xs text-muted-foreground">Not enabled</p>
                </div>
                <Button variant="outline" size="sm">Enable</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="mt-4 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Palette className="h-4 w-4 text-primary" /> Display
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Theme</p>
                  <p className="text-xs text-muted-foreground">Choose your preferred appearance</p>
                </div>
                <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Currency Display</p>
                  <p className="text-xs text-muted-foreground">How amounts are formatted</p>
                </div>
                <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>INR (Lakhs/Crores)</option>
                  <option>INR (Standard)</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Default Simulator Capital</p>
                  <p className="text-xs text-muted-foreground">Starting virtual money</p>
                </div>
                <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>10,00,000</option>
                  <option>5,00,000</option>
                  <option>25,00,000</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-4 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Bell className="h-4 w-4 text-primary" /> Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {[
                { label: "Daily Learning Reminder", desc: "Get nudged to complete your daily lesson", enabled: true },
                { label: "AI Feedback Ready", desc: "When new AI analysis is available", enabled: true },
                { label: "Portfolio Alerts", desc: "Significant changes in your holdings", enabled: true },
                { label: "Achievement Unlocked", desc: "When you earn a new badge", enabled: true },
                { label: "Weekly Report", desc: "Weekly summary of your progress", enabled: false },
                { label: "Blog Updates", desc: "New articles and market insights", enabled: false },
              ].map((n) => (
                <div key={n.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{n.label}</p>
                    <p className="text-xs text-muted-foreground">{n.desc}</p>
                  </div>
                  <button className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${n.enabled ? "bg-primary" : "bg-muted"}`}>
                    <span className={`inline-block h-4 w-4 rounded-full bg-card transition-transform ${n.enabled ? "translate-x-6" : "translate-x-1"}`} />
                  </button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="border-destructive/30">
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <p className="text-sm font-medium text-destructive">Sign Out</p>
            <p className="text-xs text-muted-foreground">Sign out of your account on this device.</p>
          </div>
          <Button variant="destructive" size="sm">
            <LogOut className="mr-1 h-4 w-4" /> Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
