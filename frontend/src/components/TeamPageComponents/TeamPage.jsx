import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TeamPage() {
  const teacherAchievements = [
    {
      category: "Teacher",
      date: "2024",
      title: "Certificate presentation by Prof. (Dr.) S M Chatterjee, Chairman, BOG",
      description: "Certificate presentation to Shreyoshi Chakraborty and Sribanti Chakraborty, students of ECE 3rd year, 6th semester by Prof. (Dr.) S M Chatterjee, Chairman, BOG, for their excellent academic performance in the 5th semester of MAKAUT.",
      author: {
        name: "",
        image: ""
      },
      image: "/ta1.jpg"
    },
    {
      category: "Teacher",
      date: "2020",
      title: " IDEATE 2020",
      description: "IEEE COMSOC MSIT SBC, in association with IEEE EDS MSIT SBC and the Department of ECE, MSIT organized IDEATE 2020 on February 14, 2020 at the Seminar hall of the college. The program was attended by over 80 participants. All participating students benefited immensely from the interactive program.",
      author: {
        name: "",
        image: ""
      },
      image: "/ta2.jpg"
    }
  ];

  const studentAchievements = [
    {
      category: "Student",
      date: "2020",
      title: "27th West Bengal State Science & Technology Congress, 2020",
      description: "Students of ECE Department are representing MSIT at 27th West Bengal State Science & Technology Congress, 2020 at Science City. Two project prototypes from ECE department,MSIT are selected for presentation in this prestigious event of Government of West Bengal.",
      author: {
        name: "",
        image: ""
      },
      image: "/sta1.jpg"
    },
    {
      category: "Student",
      date: "2020",
      title: "Explora 2020",
      description: "Congratulations of Sagnik Dutta Gupta and Arindam Ghorai of EE Department, MSIT for their AGROTECH which was show cased in the event Explora 2020 , funded by TEQIP and organized by MAKAUT on National Science Day. The idea took shape under the mentorship of Mr. Kaustuv Dasgupta and Mr. Gautam Banerjee",
      author: {
        name: "",
        image: ""
      },
      image: "/saa2.jpg"
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
              {/* <AvatarImage alt={achievement.author.name} src={achievement.author.image} /> */}
              {/* <AvatarFallback>{achievement.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback> */}
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
              {/* <AvatarImage alt={achievement.author.name} src={achievement.author.image} /> */}
              {/* <AvatarFallback>{achievement.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback> */}
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
      {/* <h1 className="text-3xl font-bold text-center mb-12">Our Achievements</h1> */}
      
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