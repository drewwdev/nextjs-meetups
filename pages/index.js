import MeetupList from "../components/meetups/MeetupList";

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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
