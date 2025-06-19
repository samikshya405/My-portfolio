import uluru from "../../assets/blog/uluru.jpg";
import sunset from "../../assets/blog/sunset.jpg";
import lakelyell from "../../assets/blog/breakfast.jpg";
import mining from "../../assets/blog/mining.jpg";
import newey from "../../assets/blog/newey.jpg";
import wilcannia from "../../assets/blog/wilcannia.jpg";
import miners from "../../assets/blog/miners.jpg";
import road from "../../assets/blog/road.jpg";
import rainbow from "../../assets/blog/rainbow.jpg";
import rocket from "../../assets/blog/rocket.jpg";
import underground from "../../assets/blog/underground.jpg";
import dog from "../../assets/blog/dog.jpg";
import redcentre from "../../assets/blog/redcentre.jpg";
import rock from "../../assets/blog/rock.jpg";
import rock2 from "../../assets/blog/rock2.jpg";
import palm from "../../assets/blog/palm.jpg";
import "./blog.css";
const Blog = () => {
  return (
    <div className="container-sec">
      <div>
        <div style={{ margin: "0 auto", textAlign: "center" }}>
          <h2 className="  py-3 my-3">
            Sydney to Darwin via Uluru: A Road Trip to Remember
          </h2>
          <img
            src={uluru}
            alt="uluru-img"
            style={{
              width: "100%",
              maxHeight: "500px",
              objectFit: "cover",
              display: "block",
              margin: "0 auto",
              borderRadius: "8px",
            }}
          />
          <p className="text-start py-2">
            An 11-day journey through the heart of Australia, filled with
            sunsets, red dirt, roadside meals, and memories that will stay with
            us forever.
          </p>
        </div>
        <div>
          <h3 className="block-heading">
            <strong>Day 1: Sydney to Dubbo — A Golden Start</strong>
          </h3>
          <p className="p-text">
            On June 4, 2025, I packed my life into one car and started a
            once-in-a-lifetime journey from Sydney to Darwin with my husband. We
            left Sydney around 8:00 AM, and our first stop was Lake Lyell, a
            peaceful lake just outside Lithgow. It's known for its calm water,
            green hills, and quiet picnic spots. We set up our little butane
            stove and made a simple breakfast by the lake. Nothing fancy — just
            toast and coffee — but it felt special.
          </p>
          <p className="p-text">
            By late afternoon, we reached Dubbo, a regional city in Central West
            NSW. Just before town, we noticed the sun slowly dipping down behind
            the golden fields. We stopped the car on the side of the highway,
            and I stepped out to soak it all in.
          </p>

          <div className="blog-photo-row py-2">
            <div className="blog-photo-block">
              <img src={lakelyell} alt="Lake Lyell" className="contain-fit" />
              <p className="blog-caption">
                Lake Lyell – our first breakfast stop with toast by the lake.
              </p>
            </div>

            <div className="blog-photo-block">
              <img src={sunset} alt="Sunset Dubbo" />
              <p className="blog-caption">
                Sunset fields before reaching Dubbo — golden hour magic.
              </p>
            </div>
          </div>
          <p className="p-text">
            It felt like the sky had paused just for us — warm light, a quiet
            road, and a sense that this journey was going to be something truly
            unforgettable. It was the perfect way to end Day 1.
          </p>
        </div>
        {/* ------------------day 2--------- */}
        <div>
          <h3 className="block-heading">
            <strong>
              Day 2: Dubbo to Cobar — Big Bogan, Big Views & Outback Calm
            </strong>
          </h3>
          <p className="p-text">
            After breakfast, we left Dubbo around 9:00 AM and hit the road west.
            Our first stop was Nyngan, a small outback town sitting on the Bogan
            River. We visited the Mid-State Shearing Shed Museum, which gave us
            a glimpse into the hardworking, rural life of shearers and graziers
            — and of course, we had to snap a photo with the town’s famous local
            icon: the Big Bogan statue.
          </p>
          <p>
            Next, we drove on toward Fort Bourke Lookout, just outside Bourke.
            The view from up there was wide and powerful — raw, red land
            stretching far into the horizon. From the edge, we spotted an active
            mine below, with trucks slowly winding through the layers of rock
            like ants through a canyon.
          </p>
          <p>
            It was quiet and strangely beautiful — a side of Australia not many
            people get to see up close.
          </p>
          <p>
            By late afternoon, we arrived in Cobar, a historic mining town
            surrounded by red soil, wide skies, and that peaceful small-town
            energy. After checking into our motel, we wandered around the
            streets — simple, charming, and with a sense of stillness that felt
            refreshing. We grabbed a few things from IGA, then drove out to
            Newey Reserve, a peaceful lake on the edge of town. There were
            barely any people around. We set up a small BBQ as the sky softened
            into pink and gold. Dinner by the water, wrapped in silence — it was
            the kind of slow moment that stays with you.
          </p>
          <div className="blog-photo-row py-2">
            <div className="blog-photo-block">
              <img src={mining} alt="Lake Lyell" className="contain-fit" />
              <p className="blog-caption">
                View from Fort Bourke Lookout — red earth and winding mine roads
                deep in the outback.
              </p>
            </div>

            <div className="blog-photo-block">
              <img src={newey} alt="Sunset Dubbo" />
              <p className="blog-caption">
                Newey Reserve in Cobar — a peaceful evening BBQ by the lake.
              </p>
            </div>
          </div>
        </div>
        {/* --------------day 3--------------- */}
        <div>
          <h3 className="block-heading">
            <strong>
              Day 3: Cobar to Broken Hill — From Red Dust to Silver City
            </strong>
          </h3>
          <p className="p-text">
            We started our morning early at Newey Reserve again — it was too
            peaceful not to go back. After breakfast, we stopped at the Cobar
            Miner Heritage Park, a small open-air museum filled with old mining
            equipment and murals telling the story of Cobar’s gold and copper
            history.
          </p>
          <p>
            Then we hit the road toward Broken Hill, stopping at Wilcannia on
            the way — a small, historic town on the Darling River. It once
            played a big role in river trade and has many old stone buildings
            still standing, giving a glimpse of its past.
          </p>
          <p>
            We arrived in Broken Hill around 3:00 PM. Often called the "Silver
            City," it's one of Australia's oldest mining towns and is filled
            with art, culture, and history. We visited the Line of Lode Miner
            Memorial, which sits dramatically on top of a hill overlooking the
            town — a tribute to miners lost over the years. The nearby Mining
            Museum was also worth the stop, helping us understand how this town
            shaped the region.
          </p>

          <div className="blog-photo-row py-2">
            <div className="blog-photo-block">
              <img src={miners} alt="Lake Lyell" className="contain-fit" />
              <p className="blog-caption">
                Line of Lode — honoring the miners who built this town
              </p>
            </div>

            <div className="blog-photo-block">
              <img src={wilcannia} alt="Sunset Dubbo" />
              <p className="blog-caption">
                Wilcannia — once a river hub, now a town frozen in time
              </p>
            </div>
          </div>
        </div>
        {/* ---------------day 4------------ */}
        <div>
          <h3 className="block-heading">
            <strong>
              Day 4: Broken Hill to Port Augusta – Trains, Rainbows & Coastal
              Air
            </strong>
          </h3>
          <p className="p-text">
            This day was all about discovery. We left Broken Hill and hit the
            road toward Port Augusta, passing through Peterborough — a charming
            railway town with a lot of character. We stopped at the Steamtown
            Heritage Rail Centre, where we saw beautifully restored steam trains
            and got a glimpse into Australia’s railway past.
          </p>
          <p className="p-text">
            As we continued, something magical happened — a bright, perfect
            rainbow arched right over the open outback. We stopped the car,
            stepped out, and just took it in. It honestly felt like a little
            gift from the universe.
          </p>
          <p className="p-text">
            We took a scenic detour through Telowie Gorge, where the road
            twisted through green hills and bushland — a refreshing change from
            the dry flats we’d seen for days. Eventually, we rolled into Port
            Germein, a quiet coastal town with one of the longest wooden piers
            in the Southern Hemisphere. We stretched our legs, breathed in the
            salty air, and just slowed down for a moment.
          </p>
          <p className="p-text">
            By evening, we reached Port Augusta, often called the "Crossroads of
            Australia." It’s where the outback truly begins — and where our
            adventure felt like it was shifting into something even bigger.
          </p>

          <div className="blog-photo-row py-2">
            <div className="blog-photo-block">
              <img src={rainbow} alt="Lake Lyell" className="contain-fit" />
              <p className="blog-caption">
                Outback rainbow — magic after the rain
              </p>
            </div>

            <div className="blog-photo-block">
              <img src={road} alt="Sunset Dubbo" />
              <p className="blog-caption">
                Twists and turns — the kind of drive that keeps you awake and
                amazed
              </p>
            </div>
          </div>
        </div>
        {/* --------------day 5--------------- */}
        <div>
          <h3 className="block-heading">
            <strong>
              Day 5: Port Augusta to Coober Pedy - Rockets, Red Dust & Life
              Underground
            </strong>
          </h3>
          <p className="p-text">
            We left Port Augusta early and headed north. Along the way, we
            stopped at Woomera, a remote town once used for rocket and missile
            testing. The Woomera Heritage Centre had outdoor displays of real
            rockets and offered a glimpse into Australia's space and military
            history.
          </p>
          <p className="p-text">
            By the afternoon, we arrived in Coober Pedy, famously known as the
            opal capital of the world. What makes it truly unique is its
            underground lifestyle — with homes, shops, and churches carved into
            the earth to escape the desert heat.
          </p>
          <p className="p-text">
            The town felt like another planet — quiet, dry, and full of
            character.
          </p>

          <div className="blog-photo-row py-2">
            <div className="blog-photo-block">
              <img src={rocket} alt="Lake Lyell" className="contain-fit" />
              <p className="blog-caption">
                Woomera — home to historic rocket displays from Australia’s
                testing era
              </p>
            </div>

            <div className="blog-photo-block">
              <img src={underground} alt="Sunset Dubbo" />
              <p className="blog-caption">
                Coober Pedy’s underground museum — history in the red earth.
              </p>
            </div>
          </div>
        </div>
        {/* ----------------day 6---------------- */}
        <div>
          <h3 className="block-heading">
            <strong>
              Day 6: Coober Pedy to Erldunda — Leaving the Caves, Chasing the
              Centre
            </strong>
          </h3>
          <p className="p-text">
            We left Coober Pedy and drove to Erldunda, known as the “Centre of
            the Centre” — the central point of Australia. We stayed at Erldunda
            Desert Oaks Resort, a popular stop for travellers with caravans and
            4WDs exploring the outback.
          </p>
          <p className="p-text">
            We reached early, set up our gas stove, cooked dinner, and relaxed.
            As the sun began to set, the sky turned golden — and the peaceful
            outback, with a few curious animals nearby, made it feel like home
            for the night.
          </p>

          <div className="blog-photo-row py-2">
            <div className="blog-photo-block single">
              <img src={dog} alt="Lake Lyell" className="contain-fit" />
              <p className="blog-caption">Golden hour in the outback</p>
            </div>

            {/* <div className="blog-photo-block">
              <img src={gas} alt="Sunset Dubbo" />
              <p className="blog-caption">
                Coober Pedy’s underground museum — history in the red earth.
              </p>
            </div> */}
          </div>
        </div>
        {/* -------------------day 7--------------- */}
        <div>
          <h3 className="block-heading">
            <strong>
              Day 7: Erldunda to Uluru — Touching the Heart of Australia
            </strong>
          </h3>
          <p className="p-text">
            This was the highlight of our journey. We left Erldunda early and
            headed to Uluru-Kata Tjuta National Park, home to one of Australia’s
            most iconic natural wonders — Uluru.
          </p>
          <p className="p-text">
            Rising 348 meters above the desert, Uluru is a sacred site for the
            Anangu people, the Traditional Owners of the land. To learn more
            about its cultural significance, we visited the Uluru Cultural
            Centre, which gave us a deeper understanding of the Tjukurpa
            (traditional law), Dreamtime stories, and the connection between the
            land and its people.
          </p>
          <p className="p-text">
            We spent the day exploring the base, admiring ancient rock
            formations and caves, and watching how the colours shifted with the
            light. At sunset, the rock lit up in deep orange and red hues — a
            breathtaking moment we’ll never forget.
          </p>

          <div className="blog-photo-row py-2">
            <div className="blog-photo-block single">
              <img src={redcentre} alt="Lake Lyell" className="contain-fit" />
              <p className="blog-caption">
                Sunset Over Uluru — Highlight of Uluru-Kata Tjuta National Park
              </p>
            </div>

            
          </div>
        </div>
        {/* ------------------day 8 --------------- */}
        <div>
          <h3 className="block-heading">
            <strong>
              Day 8: Uluru to Alice Springs — Red Gorges & Slow Afternoons
            </strong>
          </h3>
          <p className="p-text">
            After a memorable day at Uluru, we drove to Alice Springs, the heart
            of Central Australia. Known for its desert landscapes and Aboriginal
            culture, the town has a slower, relaxed pace. We visited Simpson’s
            Gap, a striking natural gorge in the West MacDonnell Ranges. The
            towering red cliffs and the quiet waterhole made it a peaceful place
            to pause and take it all in.
          </p>
          <p className="p-text">
            The rest of the day was all about slowing down and enjoying the calm
            afternoon.
          </p>

          
        </div>
        {/* --------------day 9----------- */}
        <div>
          <h3 className="block-heading">
            <strong>
              Day 9: Alice Springs to Tennant Creek — Boulders, Balance &
              Outback Roads
            </strong>
          </h3>
          <p className="p-text">
            We left Alice Springs and drove north toward Tennant Creek. Along
            the way, we stopped at one of the most unique natural landmarks in
            the Northern Territory — the Devils Marbles (Karlu Karlu).
          </p>
          <p>
            These massive, round granite boulders are scattered across the
            desert and are sacred to the Warumungu people. It’s a surreal sight
            — some of the rocks look like they’re impossibly balanced.
          </p>
          <p>
            After spending some time there, we continued on to Tennant Creek for
            an overnight stop.
          </p>

          <div className="blog-photo-row py-2">
            <div className="blog-photo-block ">
              <img src={rock} alt="Lake Lyell" className="contain-fit" />
              <p className="blog-caption">
              Balancing boulders at Devils Marbles.
              </p>
            </div>

            <div className="blog-photo-block">
              <img src={rock2} alt="Sunset Dubbo" />
              <p className="blog-caption">
              Stacked stones at Karlu Karlu — nature’s balance.
              </p>
            </div>
          </div>
        </div>
        {/* --------------day 10--------------- */}
        <div>
          <h3 className="block-heading">
            <strong>Day 10: Tennant Creek to Katherine</strong>
          </h3>
          <p className="p-text">
            We continued our journey north from Tennant Creek to Katherine, a
            town known for its natural beauty and outback charm.
          </p>
          <p>
            The highlight of the day was visiting Nitmiluk Gorge (also known as
            Katherine Gorge), located in Nitmiluk National Park. The gorge is
            made up of 13 stunning sandstone gorges carved by the Katherine
            River, with calm waters and towering cliffs.
          </p>
          <p>
            We spent time taking in the view and enjoying the peaceful
            surroundings before heading into town for the night.
          </p>

         
        </div>
        {/* ---------------day 11 ----------- */}
        <div>
          <h3 className="block-heading">
            <strong>Day 11: Katherine to Darwin - Final Stretch</strong>
          </h3>
          <p className="p-text">
            Our last day on the road. We left Katherine and made the final drive
            to Darwin, the tropical capital of the Northern Territory.
          </p>
          <p className="p-text">
            After 11 days, thousands of kilometres, and countless memories, it
            felt surreal to finally arrive. From outback sunsets and red deserts
            to rivers, rocks, and quiet roadside stops — this journey was more
            than just a move. It was a once-in-a-lifetime experience.
          </p>
          <p className="p-text">
            Darwin welcomed us with warm air, palm trees, and the feeling of a
            new beginning.
          </p>
         

          <div className="blog-photo-row py-2">
            <div className="blog-photo-block single">
              <img src={palm} alt="Lake Lyell" className="contain-fit" />
              <p className="blog-caption">
              Palms trees and open skies — Darwin’s warm welcome
              </p>
            </div>

            
          </div>
          <p className="p-text">
            This trip reminded me that sometimes the journey really is the
            destination. From the packed car in Sydney to the warm welcome in
            Darwin, every stop gave us something to remember — and I’m so glad
            we took the long road.
          </p>
          
        </div>
      </div>
    </div>
  );
};
export default Blog;
