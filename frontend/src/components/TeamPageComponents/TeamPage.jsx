import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TeamPage() {
  const teacherAchievements = [
    {
      category: "Teacher",
      date: "2023",
      title: "Best Research Paper Award",
      description: "Dr. Sarah Wilson received the Best Research Paper Award at the International Conference on Advanced Technology for her groundbreaking work in AI.",
      author: {
        name: "Dr. Sarah Wilson",
        image: "/placeholder.svg"
      },
      image: "/sher.jpg"
    },
    {
      category: "Teacher",
      date: "2023",
      title: "Excellence in Teaching",
      description: "Prof. Mike Johnson received the Excellence in Teaching Award for his innovative teaching methods in Computer Science.",
      author: {
        name: "Prof. Mike Johnson",
        image: "/placeholder.svg"
      },
      image: "/sher.jpg"
    }
  ];

  const studentAchievements = [
    {
      category: "Student",
      date: "2023",
      title: "National Coding Championship",
      description: "John Smith won first place in the National Coding Championship, representing our college against 500+ participants.",
      author: {
        name: "John Smith",
        image: "/placeholder.svg"
      },
      image: "/sher.jpg"
    },
    {
      category: "Student",
      date: "2023",
      title: "International Research Grant",
      description: "Kate Adie secured a prestigious international research grant for her work in sustainable technology.",
      author: {
        name: "Kate Adie",
        image: "/placeholder.svg"
      },
      image: "/sher.jpg"
    }
  ];

  const renderAchievements = (achievements) => {
    return achievements.map((achievement, index) => (
      <Card key={index} className="overflow-hidden border-none shadow-none">
        <CardContent className="p-0">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
    {index % 2 === 0 ? (
      <>
        <div className="space-y-4 p-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-orange-100 hover:bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-600">
                {achievement.category}
              </Badge>
              <span className="text-sm text-muted-foreground">{achievement.date}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">{achievement.title}</h2>
            <p className="text-muted-foreground">{achievement.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="h-10 w-10">
              <AvatarImage alt={achievement.author.name} src={achievement.author.image} />
              <AvatarFallback>{achievement.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{achievement.author.name}</span>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[450px] overflow-hidden rounded-lg">
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 20%' }}
          />
        </div>
      </>
    ) : (
      <>
        <div className="relative w-full h-[450px] overflow-hidden rounded-lg">
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 20%' }}
          />
        </div>
        <div className="space-y-4 p-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-orange-100 hover:bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-600">
                {achievement.category}
              </Badge>
              <span className="text-sm text-muted-foreground">{achievement.date}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">{achievement.title}</h2>
            <p className="text-muted-foreground">{achievement.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="h-10 w-10">
              <AvatarImage alt={achievement.author.name} src={achievement.author.image} />
              <AvatarFallback>{achievement.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{achievement.author.name}</span>
            </div>
          </div>
        </div>
      </>
    )}
  </div>
</CardContent>
      </Card>
    ));
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">Our Achievements</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Teacher Achievements</h2>
        <div className="space-y-12">
          {renderAchievements(teacherAchievements)}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Student Achievements</h2>
        <div className="space-y-12">
          {renderAchievements(studentAchievements)}
        </div>
      </div>
    </div>
  );
}