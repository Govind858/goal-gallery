'use client'
import React from 'react';
import { Calendar, MapPin, Trophy, User } from 'lucide-react';

const goalsData = [
   {
    "Year": 2009,
    "Heading": "Cristiano Ronaldo – 2009 Puskás Award Goal",
    "Description": "40-yard thunderbolt for Man United",
    "Goal Details": {
      "Player": "Cristiano Ronaldo",
      "Country": "Portugal",
      "Goal Against": "FC Porto",
      "Match Info": "UEFA Champions League Quarter-Final"
    },
    "Video Link": "https://www.youtube.com/watch?v=d5-ypskRjls"
  },
  {
    "Year": 2010,
    "Heading": "Hamit Altıntop – 2010 Puskás Award Goal",
    "Description": "Volley from corner in Euro qualifier",
    "Goal Details": {
      "Player": "Hamit Altıntop",
      "Country": "Turkey",
      "Goal Against": "Kazakhstan",
      "Match Info": "UEFA Euro 2012 Qualifier"
    },
    "Video Link": "https://www.youtube.com/watch?v=PH3Ru6nK3Bk"
  },
  {
    "Year": 2011,
    "Heading": "Neymar – 2011 Puskás Award Goal",
    "Description": "Solo dribble through defenders",
    "Goal Details": {
      "Player": "Neymar",
      "Country": "Brazil",
      "Goal Against": "Flamengo",
      "Match Info": "Campeonato Brasileiro Série A"
    },
    "Video Link": "https://www.youtube.com/watch?v=1wvwSER_w-M"
  },
  {
    "Year": 2012,
    "Heading": "Miroslav Stoch – 2012 Puskás Award Goal",
    "Description": "First-time volley from edge of box",
    "Goal Details": {
      "Player": "Miroslav Stoch",
      "Country": "Slovakia",
      "Goal Against": "Gençlerbirliği",
      "Match Info": "Turkish Süper Lig"
    },
    "Video Link": "https://youtu.be/q_GKzxORh18?si=7VI6MWXy0ur84OZ4"
  },
  {
    "Year": 2013,
    "Heading": "Zlatan Ibrahimović – 2013 Puskás Award Goal",
    "Description": "30-yard bicycle kick",
    "Goal Details": {
      "Player": "Zlatan Ibrahimović",
      "Country": "Sweden",
      "Goal Against": "England",
      "Match Info": "International Friendly"
    },
    "Video Link": "https://youtu.be/RM_5tJncHww?si=ipAsv_CbkJ5zmcbX"
  },
  {
    "Year": 2014,
    "Heading": "James Rodríguez – 2014 Puskás Award Goal",
    "Description": "World Cup volley from chest control",
    "Goal Details": {
      "Player": "James Rodríguez",
      "Country": "Colombia",
      "Goal Against": "Uruguay",
      "Match Info": "2014 FIFA World Cup – Round of 16"
    },
    "Video Link": "https://youtu.be/zlcf7D7Um6E?si=SR9z7wCMES84A8wV"
  },
  {
    "Year": 2015,
    "Heading": "Wendell Lira – 2015 Puskás Award Goal",
    "Description": "Acrobatic scissor kick",
    "Goal Details": {
      "Player": "Wendell Lira",
      "Country": "Brazil",
      "Goal Against": "Atlético-GO",
      "Match Info": "Brazilian Série B"
    },
    "Video Link": "https://youtu.be/CmkV3p3CGYY?si=NZLBOu2-a3EGEhKO"
  },
  {
    "Year": 2016,
    "Heading": "Mohd Faiz Subri – 2016 Puskás Award Goal",
    "Description": "Incredible swerving free-kick",
    "Goal Details": {
      "Player": "Mohd Faiz Subri",
      "Country": "Malaysia",
      "Goal Against": "Pahang",
      "Match Info": "Malaysian Super League"
    },
    "Video Link": "https://youtu.be/fAzGec1w2jw?si=lkL_llL-xVwEsFm6"
  },
  {
    "Year": 2017,
    "Heading": "Olivier Giroud – 2017 Puskás Award Goal",
    "Description": "Scorpion kick goal for Arsenal",
    "Goal Details": {
      "Player": "Olivier Giroud",
      "Country": "France",
      "Goal Against": "Crystal Palace",
      "Match Info": "English Premier League"
    },
    "Video Link": "https://youtu.be/gy0i1Gj_jJY?si=N7efa1qIele8FNHt"
  },
  {
    "Year": 2018,
    "Heading": "Mohamed Salah – 2018 Puskás Award Goal",
    "Description": "Curving solo goal in Merseyside Derby",
    "Goal Details": {
      "Player": "Mohamed Salah",
      "Country": "Egypt",
      "Goal Against": "Everton",
      "Match Info": "English Premier League"
    },
    "Video Link": "https://youtu.be/qZBeOLDRCrs?si=A92X53EGfcjhweYY"
  },
  {
    "Year": 2019,
    "Heading": "Dániel Zsóri – 2019 Puskás Award Goal",
    "Description": "Bicycle kick on his debut",
    "Goal Details": {
      "Player": "Dániel Zsóri",
      "Country": "Hungary",
      "Goal Against": "Ferencváros",
      "Match Info": "Hungarian NB I League"
    },
    "Video Link": "https://youtu.be/4OXqokUqxcM?si=2jEfxviMph9TNjn0"
  },
  {
    "Year": 2020,
    "Heading": "Son Heung-min – 2020 Puskás Award Goal",
    "Description": "Solo run from own half",
    "Goal Details": {
      "Player": "Son Heung-min",
      "Country": "South Korea",
      "Goal Against": "Burnley",
      "Match Info": "English Premier League"
    },
    "Video Link": "https://youtu.be/C-CefuZ6h1k?si=sVBSescfaiPHLAgp"
  },
  {
    "Year": 2021,
    "Heading": "Erik Lamela – 2021 Puskás Award Goal",
    "Description": "Rabona goal for Spurs in North London derby",
    "Goal Details": {
      "Player": "Erik Lamela",
      "Country": "Argentina",
      "Goal Against": "Arsenal",
      "Match Info": "English Premier League"
    },
    "Video Link": "https://youtu.be/cTidIMc9VPE?si=4HFtBtt62xZxTTQe"
  },
  {
    "Year": 2022,
    "Heading": "Marcin Oleksy – 2022 Puskás Award Goal",
    "Description": "Stunning volley on crutches",
    "Goal Details": {
      "Player": "Marcin Oleksy",
      "Country": "Poland (Amputee Football)",
      "Goal Against": "Stal Rzeszów",
      "Match Info": "Polish Amputee Football League"
    },
    "Video Link": "https://youtu.be/EzYbCJ45-b8?si=rjRFwrmHYzLOX4lK"
  },
  {
    "Year": 2023,
    "Heading": "Guilherme Madruga – 2023 Puskás Award Goal",
    "Description": "Midfield bicycle kick",
    "Goal Details": {
      "Player": "Guilherme Madruga",
      "Country": "Brazil",
      "Goal Against": "Novorizontino",
      "Match Info": "Campeonato Brasileiro Série B"
    },
    "Video Link": "https://youtu.be/tn9oo25vYwo?si=oXzPqdvphTX3zF_g"
  }
];

const extractVideoId = (url) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : null;
};

export default function GoalGalleryMain() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Header */}
      <div className="bg-black text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight">
            GoalGallery: Iconic Football Goals from Puskás to Present
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-medium text-gray-300">
            Celebrating the most spectacular goals in football history
          </p>
        </div>
      </div>

      {/* Goals Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-12 sm:space-y-16">
          {goalsData.map((goal, index) => {
            const videoId = extractVideoId(goal["Video Link"]);
            return (
              <div key={index} className="border-b-2 border-black pb-12 sm:pb-16 last:border-b-0">
                {/* Goal Heading */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black mb-2">
                    {goal.Heading}
                  </h2>
                  <div className="flex items-center text-lg sm:text-xl font-bold text-gray-700">
                    <Calendar className="w-5 h-5 mr-2" />
                    {goal.Year}
                  </div>
                </div>

                {/* YouTube Video Embed */}
                <div className="mb-6 sm:mb-8">
                  <div className="relative w-full cursor-pointer group" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full border-2 border-black rounded-lg group-hover:border-gray-600 transition-colors duration-200"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={goal.Heading}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onClick={() => window.open(goal["Video Link"], '_blank')}
                    ></iframe>
                  </div>
                </div>

                {/* Description and Goal Details Cards */}
                <div className="space-y-6">
                  {/* Description Card */}
                  <div className="bg-white border-2 border-black rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                    <h3 className="text-xl sm:text-2xl font-black text-black mb-4 flex items-center">
                      <Trophy className="w-6 h-6 mr-3" />
                      Description
                    </h3>
                    <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
                      {goal.Description}
                    </p>
                  </div>

                  {/* Goal Details Card */}
                  <div className="bg-white border-2 border-black rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                    <h3 className="text-xl sm:text-2xl font-black text-black mb-6 flex items-center">
                      <User className="w-6 h-6 mr-3" />
                      Goal Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <User className="w-5 h-5 mr-3 text-black hover:text-gray-600 transition-colors duration-200" />
                        <div>
                          <span className="font-bold text-black text-base sm:text-lg block">Player</span>
                          <span className="text-gray-700 font-medium text-base sm:text-lg">{goal["Goal Details"].Player}</span>
                        </div>
                      </div>
                      <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <MapPin className="w-5 h-5 mr-3 text-black hover:text-gray-600 transition-colors duration-200" />
                        <div>
                          <span className="font-bold text-black text-base sm:text-lg block">Country</span>
                          <span className="text-gray-700 font-medium text-base sm:text-lg">{goal["Goal Details"].Country}</span>
                        </div>
                      </div>
                      <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <Trophy className="w-5 h-5 mr-3 text-black hover:text-gray-600 transition-colors duration-200" />
                        <div>
                          <span className="font-bold text-black text-base sm:text-lg block">Against</span>
                          <span className="text-gray-700 font-medium text-base sm:text-lg">{goal["Goal Details"]["Goal Against"]}</span>
                        </div>
                      </div>
                      <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <Calendar className="w-5 h-5 mr-3 text-black hover:text-gray-600 transition-colors duration-200" />
                        <div>
                          <span className="font-bold text-black text-base sm:text-lg block">Match</span>
                          <span className="text-gray-700 font-medium text-base sm:text-lg">{goal["Goal Details"]["Match Info"]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}