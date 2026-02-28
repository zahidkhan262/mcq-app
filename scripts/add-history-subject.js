// Script to add a new subject `history_of_uzk` to mcq-data.json
// Run from project root with: node scripts/add-history-subject.js

import fs from 'fs';
import path from 'path';

const __dirname = new URL('.', import.meta.url).pathname;
const DATA_PATH = path.join(__dirname, '..', 'public', 'data', 'mcq-data.json');

const input = String.raw`Who is the Secretary General of the United Nations?  	 António Guterres  	 Xi Jinping  	 Christine Lagarde  	 Rumen Radev  
By February 1993, in which city of Uzbekistan was the UN office opened?  	 Tashkent  	 Samarkand  	 Fergana  	 Bukhara  
What is the term for a person elected to an authorized state body?  	 Deputy  	 Minister  	 Delegate  	 Ambassador  
What is the name of the lower house of the Parliament of Uzbekistan?  	 Legislative  	 Senate  	 Property Owners  	 Social  
After whom is the Tashkent Islamic Institute named?  	 Imam Bukhari  	 Mahmud Zamakhshari  	 Isa Termizi  	 Al Maturidi  
Which international Islamic organization deals with education, science, and cultural issues?  	 ISESCO  	 OIC  	 UNESCO  	 UNICEF  
In which work did Islam Karimov justify the five principles of building a new society?  	 "Uzbekistan’s Unique Path to a Market Economy"  	 "Uzbekistan’s Path to Independence and Development"  	 "Uzbekistan: On the Threshold of Independence"  	 "Uzbekistan: National Independence, Economy, Politics, Ideology"  
What is the term for a society where multiple political parties operate?  	 Multiparty system  	 Local self-government  	 Legal and democratic principle  	 Strong civil society  
How much of the total number of deputies and senators must vote in favor to pass a vote of no confidence against the Prime Minister?  	 Two thirds  	 One third  	 One fifth  	 One tenth  
With how many countries has Uzbekistan Airlines established air connections and provides passenger services?  	 25 countries  	 35 countries  	 40 countries  	 15 countries  
What does "subsidy" mean?  	 Latin: Gift  	 Latin: Sailing on a ship  	 Latin: Head, main  	 Latin: Strict order  
The word "Master" originates from which language and means "teacher," "leader"?  	 Latin  	 Chinese  	 Uzbek  	 Tajik  
2017 was declared the Year of…?  	 "Dialogue with People and Human Interests"  	 "Family"  	 "Healthy Mother and Child"  	 "Honoring the Elderly"  
In the "Concept of Foreign Policy Activity," which region is stated as vital to Uzbekistan’s interests?  	 Central Asia  	 Aral Sea Basin  	 Afghanistan and adjacent territories  	 Middle Asia  
What was the first law adopted after independence?  	 Law on State Independence  	 Constitution  	 Election Code  	 Civil Code  
Which party focuses on the middle class and disadvantaged groups, representing their political and social will?  	 People's Democratic Party  	 Liberal Democratic Party (UzLiDeP)  	 "Vatan Taraqqiyoti" Party  	 "Adolat" Social Democratic Party  
Which party represents and protects the interests of property owners, small businesses, farmers, highly skilled professionals, and businesspeople?  	 Uzbekistan Liberal Democratic Party (UzLiDeP)  	 Uzbekistan People's Democratic Party  	 Uzbekistan "Adolat" Social Democratic Party  	 "Vatan Taraqqiyoti" Party  
Which party's main goal and objective is to preserve national traditions and values?  	 Uzbekistan "Milliy Tiklanish" Democratic Party  	 Uzbekistan Liberal Democratic Party (UzLiDeP)  	 Uzbekistan "Adolat" Social Democratic Party  	 "Vatan Taraqqiyoti" Party  
Under whose decision was the Ministry of Preschool Education established for the first time in Uzbekistan?  	 Current President Shavkat Mirziyoyev  	 First President Islam Karimov  	 Chairman of the Uzbekistan Youth Union, Qahramon Quronboyev  	 UN SecretaryGeneral António Guterres  
What was the first political party established during the independence period?  	 Uzbekistan People's Democratic Party  	 "Vatan Taraqqiyoti" Party  	 "Erk" Democratic Party  	 "Fidokorlar" National Democratic Party  
Which party was founded in November 1991?  	 Uzbekistan People's Democratic Party  	 "Vatan Taraqqiyoti" Party  	 "Fidokorlar" National Democratic Party  	 "Erk" Democratic Party  
On July 2, 1992, during the Sixth Session of the Supreme Council, which national symbol was adopted?  	 State Emblem of Uzbekistan  	 National Anthem of Uzbekistan  	 National Currency of Uzbekistan  	 National Flag of Uzbekistan  
Who appoints and dismisses the governors of provinces and Tashkent city according to the law?  	 President of Uzbekistan  	 Cabinet of Ministers  	 Supreme Assembly (Oliy Majlis)  	 The People  
Provincial and Tashkent city governors represent which authority?  	 President of Uzbekistan  	 Supreme Assembly (Oliy Majlis)  	 Prime Minister  	 The People  
Who wrote the lyrics for Uzbekistan’s National Anthem?  	 Abdulla Oripov  	 Alisher Navoi  	 Erkin Vohidov  	 Muhammad Yusuf  
Which country’s "Citic" corporation built the Kungrad Soda Plant?  	 China  	 Russia  	 USA  	 Turkey  
Which color is absent in Uzbekistan's State Emblem?  	 Yellow  	 Black  	 Green  	 Silver  
When was Uzbekistan’s national flag adopted?  	 November 18, 1991  	 June 1, 1991  	 May 5, 1993  	 October 15, 1990  
Which neighboring countries does Uzbekistan serve as a connecting hub between?  	 Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, Afghanistan  	 India, Pakistan, Tajikistan, Turkmenistan, Afghanistan  	 Kazakhstan, Kyrgyzstan, China, Tajikistan, Afghanistan  	 Russia, Kyrgyzstan, Tajikistan, Turkmenistan, Afghanistan  
What does the blue color in the flag symbolize?  	 Eternal sky and pure water  	 Abundant nature  	 Peace and purity  	 Perfection and completeness  
What does the white color in the flag symbolize?  	 Peace and purity  	 Eternal sky and pure water  	 Abundant nature  	 Perfection and completeness  
Which color represents the rule of law and honor?  	 Ink color  	 Gold  	 Blue  	 White  
When was the law "On the State Emblem of the Republic of Uzbekistan" adopted?  	 July 2, 1992  	 March 2, 1992  	 June 1, 1991  	 May 5, 1993  
What currency was introduced in Uzbekistan on November 1, 1993?  	 So’m-kupon  	 So’m  	 Ruble  	 Manat  
When did Uzbekistan become a UN member?  	 March 2, 1992  	 June 1, 1991  	 May 5, 1993  	 October 15, 1990  
Which body has the authority to issue arrest warrants in Uzbekistan today?  	 Court  	 Prosecutor  	 President  	 Governor  
What color is the Humo bird on Uzbekistan’s State Emblem?  	 Silver  	 Black  	 Gold  	 Blue  
Which body represents the legislative power in Uzbekistan?  	 Supreme Assembly (Oliy Majlis)  	 Relevant regional governors  	 President of Uzbekistan  	 Court  
Who appoints and dismisses district and city mayors?  	 Relevant regional governors  	 President of Uzbekistan  	 The People  	 People's Deputies  
In 1999, which anniversary of the "Alpomish" epic was celebrated?  	 1000th anniversary  	 500th anniversary  	 1200th anniversary  	 1700th anniversary  
In which cities were statues of Islam Karimov erected?  	 Samarkand, Qarshi, Tashkent  	 Samarkand, Shahrisabz, Tashkent  	 Samarkand, Bukhara, Tashkent  	 Samarkand, Margilan, Tashkent  
Which government body functions as the executive power under the leadership of the President?  	 Cabinet of Ministers  	 Supreme Assembly (Oliy Majlis)  	 Relevant regional governors  	 President of Uzbekistan  
What does the term "innovation" mean?  	 (English – newly introduced, invention) Advanced technology, management, and other innovations and their applications in various fields  	 (Greek – concept, doctrine) A field of study on the chemical properties of organisms and their immunity  	 (Latin – to compare, equalize, balance) Political identification – stable characteristics that allow distinguishing oneself from other political groups  	 (Latin – confessions) A general concept expressing religious branches, sects, and movements  
In Uzbekistan, which political parties nominated candidates for the elections for the first time?  	 People's Democratic Party and "Erk" Democratic Party  	 People's Democratic Party and "Milliy Tiklanish" Democratic Party  	 People's Democratic Party and "Adolat" Social Democratic Party  	 People's Democratic Party and "Fidokorlar" National Democratic Party  
Which organization owns the "FDI Confidence" Index?  	 Global consulting company "A.T. Kearney"  	 Transparency International  	 World Justice Project  	 United Nations  
Is it allowed to establish emergency courts in Uzbekistan?  	 Not allowed  	 Mandatory  	 Allowed in cases of necessity  	 Only allowed in the capital  
Which international organization under the UN focuses on education, science, and culture?  	 UNESCO  	 UNICEF  	 WTO  	 IOC  
Which Latin term means "to judge, court process"?  	 Jurisdiction  	 Doctrine  	 Referendum  	 Amnesty  
Which city is recorded as the ancient capital of Khorezm?  	 Topraqqala  	 Ko’zaliqir  	 Suza  	 Tashkent  
"A nation that respects its history and ancestors will surely have a bright future." Who said this?  	 Islam Karimov  	 Boris Yeltsin  	 Rafiq Nishonov  	 Mikhail Gorbachev  
What is the current name of the Leninabad region in Tajikistan?  	 Sughd  	 Khorezm  	 Badakhshan  	 Tokharistan  
Who is the author of the monograph "The History of the Origin of the Uzbek People"?  	 A. Asqarov  	 Rosenbach  	 Chernyaev  	 Abramov  
During the 1980s in the USSR, which rivers were planned to be diverted southward to irrigate Central Asia?  	 Siberian rivers  	 South Caucasus rivers  	 Movarounnahr rivers  	 Khorasan rivers  
Which territory was incorporated into the Uzbek SSR in 1936?  	 Karakalpak Autonomous Republic  	 Samarkand  	 Tashkent  	 Kokand  
What is the process called when the most important state and societal matters are put to public discussion?  	 Referendum  	 Alternative elections  	 Ombudsman  	 Strategy  
What is the oldest written source providing information about the history of Central Asia?	Avesta	Rigveda	Book of the Dead	Videvdat
During the years of independent development, how many renaissances (great periods of development) has Uzbekistan marked in its history?	2	4	5	6
When the draft of the Constitution was presented for public discussion for the second time, how many opinions were submitted?	More than 6,000	10,000	2,000	More than 10,000
How many renaissances (i.e. great development) did the Uzbek people mark in their history during the years of independent development?	2	4	5	6
When the draft constitution was presented at the 2nd public hearing, how many opinions were expressed in total?	More than 6000	10,000	2000	More than 10,000
When the soum was put into circulation on July 1, 1994, how many denominations of money were put into circulation?	7	6	5	9
In what session of the Oliy Majlis was the Law "On the National Anthem of the Republic of Uzbekistan" adopted?	11	5	6	8
Which day was declared by UNESCO as "International Day of Tolerance"?	16 november	21 february	9 may	21 december
How many articles does the Law "On the Basics of State Independence of the Republic of Uzbekistan" consist of?	17	12	21	126
The Constitution and laws of the Republic of Uzbekistan specify the age at which citizens have the right to vote?	18	21	19	25
Schools of Sufism were established in Bahauddin Naqshband center of which region?	Bukhara	Samarkand	Tashkent	Kokand
At what age are citizens elected to representative bodies of local government?	21	25	30	35
What percentage of the population of the Republic of Uzbekistan lives in rural areas?	62 %	72 %	84 %	92 %
The Aral Sea is considered to be one of the largest, saline and non-flowing lakes located in the desert region of the world?	4	2	3	5
How many people did the commission for preparing the draft of the Constitution of the Republic of Uzbekistan consist of?	64	54	65	74
In which session of the General Assembly of the United Nations, it was noted that the President's virtual and public receptions were established?	In the 72nd session	In the 75th session	In the 70th session	In the 79th session
A citizen of at least how many years of age has the right to be elected as the President of the Republic of Uzbekistan, those who have reached what age to the Oliy Majlis, and those who have reached what age to be elected as deputies to regional, district and city councils?	35, 25, 21	35, 21, 18	35, 25, 18	35, 18,21
On December 29, 1991, the election of the President of the Republic of Uzbekistan was held on the basis of alternative. What percentage of those who participated in the voting voted for the presidential candidate Islam Abdug'anievich Karimov?	86 %	78 %	93 %	66 %
Our country was featured for the first time in the report of the United Nations Industrial Development Organization (UNIDO) on the "Index of Competitive Industrial Productivity", and what place did it take among 152 countries?	92	102	132	65
With how many countries has Uzbekistan established official diplomatic relations by 2021?	138	123	145	150
How many national cultural centers are implementing the idea of interethnic harmony in Uzbekistan today?	More than 100	250	350	421
How many deputies were there in the Legislative Chamber of the Oliy Majlis?	150	120	130	160
What is the name of the Chinese New Year celebrated in our country?	“Chunuze”	“Maslennitsa”	“Sabanto‘y”	“Sayil”
What holidays are celebrated by the Uyghurs?	“Sayil”	“Chunuze”	“Maslennitsa”	“Sabanto‘y”
Find the person appointed as the representative of the UN in Uzbekistan?	Khalid Malik	Ashraf Ghani	Ben Gurion	Ahmad Hanbal
Who was the Director General of UNESCO who came to Samarkand in the last ten days of August 2019?	Audrey Azule	Khalid Malik	Ashraf Ghani	Ben Gurion
Since when was January 14 declared "Defenders of the Fatherland Day" in the Republic of Uzbekistan?	Since 1993	Since 1994	Since 1992	Since 1991
When was the som currency put into circulation in Uzbekistan?	July 1, 1994	In June 1995	In November 1995	In March 1995
Since what year was the parliament called Oliy Majlis?	1995 y	2005 y	2004 y	2003 y
Since then, every year October 1 has been celebrated as "Teachers and Mentors' Day"?	1997 y	1994 y	1992 y	1999 y
When was the Liberal Democratic Party of Uzbekistan (Uzlidep) founded, which has a special place in the political system of Uzbekistan?	In November 2003	In February 1995	In April 2000	In June 1995
When was "Tashkent - the capital of Islamic culture" announced by ISESKO, the educational, scientific and cultural organization of the Organization of Islamic Cooperation?	In 2007	In 2009	In 2004	In 2000
When was the Declaration of Independence of the USSR adopted?	June 20, 1990	July 10, 1991	March 24, 1990	December 29, 1991
Who is Tashkent International Airport named after?	I. Karimov, the first president of the Republic of Uzbekistan	Xi Jinping	Christine Lagarde	Rumen Pudev
Which organization adopted the "Educational and Religious Tolerance" resolution?	UN General Assembly	UNESCO	UNICEF	WTO
When was Eid al-Fitr declared a holiday?	On March 27, 1992	March 2, 1991	On March 27, 1990	August 5, 1990
When was the election based on the alternative to the Presidency of the Republic of Uzbekistan?	December 29, 1991	December 8, 1991	December 19, 1991	December 20, 1991
When did the President's decree "On improving the position of the Republic of Uzbekistan in international rankings and indexes and introducing a new mechanism of systematic work with them in state bodies and organizations"?	June 2, 2020	December 27, 2019	January 7, 2019	July 10, 2020
When was the Action Strategy approved?	February 7, 2017	February 7, 2016	February 8, 2016	December 6, 2018
When was the first Address of the President of the Republic of Uzbekistan Shavkat Mirziyoyev to the Oliy Majlis published?	December 22, 2017	February 2, 2017	December 14, 2016	March 5, 2016
When was the decision "On the establishment of the public council on the latest history of Uzbekistan under the Academy of Sciences of the Republic of Uzbekistan" made?	June 30, 2017	July 20, 2017	November 20, 2017	August 24, 2018
How many years does the development strategy include?	For 2022-2026	For 2018-2024	For 2020-2024	For 2021-2025
What years is the approved Action Strategy for five priority areas of development of the Republic of Uzbekistan?	For 2017-2021	For 2019–2023	For 2016–2021	For 2017–2022
When was the year of the "Healthy Child" announced in our country?	2014 y	2018 y	2019 y	2020 y
What is the meaning of the word democracy?	People's power	Single governorship	Sitting in front	I confirm
What color is the 5th principle of the "Strategy of Actions" for the five priority areas of Uzbekistan's development in 2017-2021?	White color	Blue color	Red color	Black color
When was the "Year of Social Protection" declared in our country?	2007 y	2016 y	2017 y	2009 y
How many years was Nukus celebrated in 2003?	70th anniversary	100 th anniversary	120 th anniversary	130 anniversary
In which district of Karakalpakstan was the Peoples' Friendship Park established on a 20-hectare area?	Gurlan	Nukus	Tashkent	Bukhara
"Al Jame' al-Sahih" is written by whom?	Imam al-Bukhari	B. Nakshband	Burhoniddin al Marginani	Khoja Ahror Vali
"Thought against thought, idea against idea, what should be fought against ignorance?"	Enlightenment	Culture	Word	Education
When was the Law "On Education" and "National Personnel Training Program" adopted?	1997 y	1996 y	1995 y	1999 y
Which cities were awarded the "Amir Temur" order in 1996?	Samarkand and Shahrisabz	Tashkent and Samarkand	Karshi and Shahrisabz	Tashkent and Bukhara
When did the peoples of the Khorezm oasis solemnly celebrate the 170th anniversary of Berdaq, a classic of Karakalpak literature?	1998 y	1995 y	1996 y	2000 y
On December 28, 2000, which city was included in the UNESCO list, becoming the third city in our republic included in the list?	Shahrisabz	Tashkent	Karshi	Bukhara
When was the decision "On the celebration of the 80th anniversary of the birth of the First President of the Republic of Uzbekistan, a great state and political figure Islam Abduganievich Karimov" made by the President of the Republic of Uzbekistan Sh.M. Mirziyoyev?	2017 y	2015 y	2016 y	2014 y
In which of the following options is the third priority direction of the Action Strategy?	Economic development and Liberalization	Development of the social sphere	Improvement of the construction system of the state and society	Ensuring the rule of law and further reforming the judicial system
In which of the following options is the second priority direction of the Action Strategy?	Ensuring the rule of law and further reforming the judicial system	Improvement of the construction system of the state and society	Security, religious tolerance and international harmony, mutually beneficial and practical foreign policy	Development of the social sphere
Which of the following options is the first priority of the Action Strategy?	Improvement of the construction system of the state and society	Ensuring the rule of law and further reforming the judicial system	Development of the social sphere	Security, religious tolerance and international harmony, mutually beneficial and practical foreign policy
In which city is the UN's permanent workplace (headquarters) located?	New York	Washington	Chicago	Paris
Define an international organization established for the purpose of strengthening peace and security on earth, and developing mutual cooperation between states.	UN	UNESCO	NATO	SCO
In connection with the entry of which country into the "Shanghai Forum", its name was changed to "Shanghai Cooperation Organization - SCO"?	Uzbekistan	Tajikistan	Iran	India
When was the 660th anniversary of Amir Temur's birth celebrated?	1996	1995	1994	1993`;

function parseLine(line, index) {
  const trimmed = line.trim();
  if (!trimmed) return null;

  // Split by 2+ whitespace (spaces or tabs) to separate question and 4 options
  const parts = trimmed.split(/\s{2,}|\t+/).filter(Boolean);
  if (parts.length < 5) return null;

  const [questionRaw, ...optionTexts] = parts;

  const labels = ['A', 'B', 'C', 'D'];
  const options = optionTexts.slice(0, 4).map((text, i) => ({
    id: labels[i],
    text: text.trim(),
    isCorrect: i === 0, // first option is correct
  }));

  const qTextMatch = questionRaw.match(/^\d+\.?\s*(.+)$/);

  return {
    id: String(index + 1),
    text: (qTextMatch ? qTextMatch[1] : questionRaw).trim(),
    options,
  };
}

function main() {
  const raw = fs.readFileSync(DATA_PATH, 'utf8');
  const data = JSON.parse(raw);

  const lines = input.split('\n');
  const questions = [];
  lines.forEach((line, idx) => {
    const q = parseLine(line, questions.length);
    if (q) {
      questions.push(q);
    }
  });

  if (!data.subjects) data.subjects = {};

  data.subjects.history_of_uzk = {
    id: 'history_of_uzk',
    name: 'History of UZK',
    questions,
  };

  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Added subject history_of_uzk with ${questions.length} questions.`);
}

main();

