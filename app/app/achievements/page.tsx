"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, Flame, Star, Trophy, Lock, CheckCircle2, Target } from "lucide-react"

const userLevel = { level: 5, title: "Intermediate Learner", xp: 2450, nextLevelXp: 3000 }

const badges = [
  { name: "First Trade", desc: "Completed your first simulated trade", earned: true, date: "2025-09-15", icon: "trade" },
  { name: "Week Warrior", desc: "7-day learning streak", earned: true, date: "2025-10-02", icon: "streak" },
  { name: "Quiz Master", desc: "Passed 5 quizzes with 80%+ score", earned: true, date: "2025-10-20", icon: "quiz" },
  { name: "Diversifier", desc: "Hold stocks from 4+ sectors", earned: true, date: "2025-11-10", icon: "diversify" },
  { name: "Journal Keeper", desc: "Write 10 journal entries", earned: true, date: "2025-12-01", icon: "journal" },
  { name: "Profit Maker", desc: "Achieve 5%+ portfolio return", earned: true, date: "2026-01-15", icon: "profit" },
  { name: "Risk Aware", desc: "Set stop-losses on all positions", earned: false, icon: "risk" },
  { name: "Month Master", desc: "30-day learning streak", earned: false, icon: "streak30" },
  { name: "Topic Complete", desc: "Finish all articles in one topic", earned: false, icon: "complete" },
  { name: "AI Whisperer", desc: "Get 90+ AI score on a journal entry", earned: false, icon: "ai" },
  { name: "Portfolio Pro", desc: "Beat Nifty 50 for 3 months", earned: false, icon: "pro" },
  { name: "Graduation", desc: "Complete all 4 learning phases", earned: false, icon: "graduate" },
]

const streakData = { current: 12, longest: 18, thisWeek: [true, true, true, true, true, false, false] }

const leaderboard = [
  { rank: 1, name: "Priya M.", level: 8, xp: 5200, badge: "gold" },
  { rank: 2, name: "Rahul K.", level: 7, xp: 4800, badge: "silver" },
  { rank: 3, name: "Sneha R.", level: 7, xp: 4500, badge: "bronze" },
  { rank: 4, name: "You (Aarav)", level: 5, xp: 2450, badge: "none", isUser: true },
  { rank: 5, name: "Vikram S.", level: 5, xp: 2300, badge: "none" },
]

export default function AchievementsPage() {
  const xpProgress = (userLevel.xp / userLevel.nextLevelXp) * 100

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Achievements</h1>
        <p className="text-muted-foreground">Track your progress, earn badges, and level up your investing skills.</p>
      </div>

      {/* Level Card */}
      <Card className="border-primary/20 bg-gradient-to-r from-secondary to-card">
        <CardContent className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:items-start">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="font-mono text-2xl font-bold">{userLevel.level}</span>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold text-foreground">{userLevel.title}</h2>
            <p className="text-sm text-muted-foreground">Level {userLevel.level}</p>
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{userLevel.xp} XP</span>
                <span>{userLevel.nextLevelXp} XP</span>
              </div>
              <Progress value={xpProgress} className="mt-1" />
              <p className="mt-1 text-xs text-muted-foreground">{userLevel.nextLevelXp - userLevel.xp} XP to Level {userLevel.level + 1}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Flame className="h-8 w-8 text-destructive" />
            <span className="font-mono text-2xl font-bold text-foreground">{streakData.current}</span>
            <span className="text-xs text-muted-foreground">Day Streak</span>
          </div>
        </CardContent>
      </Card>

      {/* Streak */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">This Week</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-3">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
              <div key={day} className="flex flex-col items-center gap-1">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${streakData.thisWeek[i] ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {streakData.thisWeek[i] ? <CheckCircle2 className="h-5 w-5" /> : <span className="text-xs">{day[0]}</span>}
                </div>
                <span className="text-xs text-muted-foreground">{day}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">Longest streak: {streakData.longest} days</p>
        </CardContent>
      </Card>

      {/* Badges Grid */}
      <div>
        <h2 className="mb-4 text-lg font-bold text-foreground">
          Badges ({badges.filter((b) => b.earned).length}/{badges.length})
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map((badge) => (
            <Card key={badge.name} className={!badge.earned ? "opacity-50" : ""}>
              <CardContent className="flex items-center gap-3 p-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${badge.earned ? "bg-primary/10" : "bg-muted"}`}>
                  {badge.earned ? (
                    <Award className="h-6 w-6 text-primary" />
                  ) : (
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{badge.name}</p>
                  <p className="text-xs text-muted-foreground">{badge.desc}</p>
                  {badge.earned && badge.date && (
                    <p className="mt-1 text-xs text-primary">Earned {badge.date}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Trophy className="h-5 w-5 text-primary" /> Leaderboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            {leaderboard.map((entry) => (
              <div key={entry.rank} className={`flex items-center gap-4 rounded-lg p-3 ${("isUser" in entry && entry.isUser) ? "border border-primary/30 bg-secondary" : "border border-border"}`}>
                <span className={`flex h-8 w-8 items-center justify-center rounded-full font-mono text-sm font-bold ${entry.rank <= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {entry.rank}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{entry.name}</p>
                  <p className="text-xs text-muted-foreground">Level {entry.level}</p>
                </div>
                <span className="font-mono text-sm text-muted-foreground">{entry.xp.toLocaleString()} XP</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
