import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/dc/Skyscrapers_of_Shinjuku_2009_January_%28revised%29.jpg",
    address: "123 Main St",
    description: "This is our first meetup",
  },
  {
    id: "m2",
    title: "Another Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/dc/Skyscrapers_of_Shinjuku_2009_January_%28revised%29.jpg",
    address: "456 Main St",
    description: "This is our first meetup",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/dc/Skyscrapers_of_Shinjuku_2009_January_%28revised%29.jpg",
    address: "789 Main St",
    description: "This is our first meetup",
  },
];

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
}

export default HomePage;
