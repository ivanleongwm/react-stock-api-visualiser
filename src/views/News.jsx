import Header from '../components/header'
import NewsCard from '../components/newsCard'

const news = [
    {
      "symbol": "FB",
      "publishedDate": "2022-03-04 20:30:39",
      "title": "Meta responds to Russian government ban on Facebook, vows to do 'everything we can' to restore service",
      "image": "https://cdn.snapi.dev/images/v1/2/3/23f2551c-facebook-logo-1264648.jpg",
      "site": "Fox Business",
      "text": "Meta responded to the Russian government blocking Facebook throughout the country, saying that it will do “everything” it can to restore service.",
      "url": "https://www.foxbusiness.com/technology/meta-responds-to-russian-government-ban-on-facebook-says-theyll-do-everything-we-can-to-restore-service"
    },
    {
      "symbol": "AAPL",
      "publishedDate": "2022-03-04 19:43:03",
      "title": "Final Trades: NUE, EFA, ERM & AAPL",
      "image": "https://cdn.snapi.dev/images/v1/i/k/ik4333-1264618.",
      "site": "CNBC Television",
      "text": "The final trades of the week. With CNBC's Melissa Lee and the Fast Money traders, Tim Seymour, Steve Grasso, Pete Najarian and Jeff Mills.",
      "url": "https://www.youtube.com/watch?v=z0hL3eCFBcg"
    },
    {
      "symbol": "AAPL",
      "publishedDate": "2022-03-04 19:04:51",
      "title": "Apple product launch next week",
      "image": "https://cdn.snapi.dev/images/v1/m/q/apple-product-launch-next-week-1264600.jpg",
      "site": "CNBC Television",
      "text": "CNBC's Steve Kopack joins 'Closing Bell' to discuss what to expect at next week's product launch.",
      "url": "https://www.youtube.com/watch?v=RGO_n8c54qs"
    },
    {
      "symbol": "AAPL",
      "publishedDate": "2022-03-04 18:00:43",
      "title": "Apple investors urge company to undergo civil rights audit",
      "image": "https://cdn.snapi.dev/images/v1/k/p/apple-investors-urge-c-1264545.jpg",
      "site": "TechXplore",
      "text": "Apple's shareholders have approved a proposal urging the iPhone maker to undergo an independent audit assessing its treatment of female and minority employees, delivering a rare rebuke to a management team that runs the world's most valuable company.",
      "url": "https://techxplore.com/news/2022-03-apple-investors-urge-company-civil.html"
    },
    {
      "symbol": "AAPL",
      "publishedDate": "2022-03-04 17:13:00",
      "title": "Apple presses U.S. lawmakers on dangers of 'sideloading' apps allowed by bill",
      "image": "https://cdn.snapi.dev/images/v1/g/n/m02d20220304t2i1593257134w940fhfwllplsqrlynxmpei23171-1264516.jpg",
      "site": "Reuters",
      "text": "Smartphone maker Apple has written to lawmakers to dispute assertions that its concerns about the dangers of sideloading apps into phones were overblown.",
      "url": "https://www.reuters.com/technology/apple-presses-us-lawmakers-dangers-sideloading-apps-allowed-by-bill-2022-03-04/"
    },
    {
      "symbol": "AAPL",
      "publishedDate": "2022-03-04 17:11:48",
      "title": "Apple, Microsoft and Other Tech Companies Stop Sales in Russia",
      "image": "https://cdn.snapi.dev/images/v1/g/e/gettyimages-1238862139-1264514.jpg",
      "site": "CNET",
      "text": "Sanctions against Russia have continued in the form of technology companies worldwide ceasing sales of products and services. Here's the list of companies involved.",
      "url": "https://www.cnet.com/news/apple-microsoft-and-other-tech-companies-stop-sales-in-russia/"
    },
    {
      "symbol": "AMZN",
      "publishedDate": "2022-03-04 17:01:37",
      "title": "Julian Robertson Trades Alphabet for Amazon",
      "image": "https://cdn.snapi.dev/images/v1/g/n/catalog-mail3-1264484.jpg",
      "site": "GuruFocus",
      "text": "Julian Robertson (Trades, Portfolio)'s Tiger Management recently released its 13F for the fourth quarter of 2021, which ended on Dec. 31.",
      "url": "https://www.gurufocus.com/news/1658251/julian-robertson-trades-alphabet-for-amazon"
    },
    {
      "symbol": "AAPL",
      "publishedDate": "2022-03-04 16:27:00",
      "title": "Investor Lesson: Holding Great Companies Through Turmoil",
      "image": "https://cdn.snapi.dev/images/v1/p/o/podc4-1264465.jpg",
      "site": "The Motley Fool",
      "text": "If you want to do well as an investor, you have to get comfortable with the idea of holding great companies through difficult times -- like the ones we're in right now.",
      "url": "https://www.fool.com/investing/2022/03/04/investor-lesson-holding-great-companies-through-tu/"
    }]


export default function News() {
    return (
        <div className="App">
        <div className="content-container">
          
          <Header />
          {news.map((element,index)=> <NewsCard stock={element}/>
          )}
        </div>
      </div>
    );
}