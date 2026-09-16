import officeImage from "../assets/images/officeCleaning.jpg";
import houseImage from "../assets/images/houseCleaning.jpg";
import springCleaningImage from "../assets/images/springCleaning.jpg";
import afterBuldingCleaningImage from "../assets/images/afterBulidingCleaning.jpg";
const servicesData = [
  {
   id: 1,
   title: " Comprehensive Residential Cleaning Service",
   description: " our comprehensive residential cleaning service. Our professional team meticulously cleans every corner, from floor to ceiling, ensuring a healthy and refreshed living environment",
    image: {src: houseImage}
  },
  {
   id: 2,
   title: "Post-Event Cleanup Service",
   description: " After parties, conferences, or major events, let us handle the mess. Our team ensures all debris is removed and the venue is quickly restored to its original condition",
    image: {src: springCleaningImage}
  },
  {
   id: 3,
   title: "Post-Construction Cleanup Service",
   description: " Finished with renovation or construction? We handle heavy dust and debris removal, thoroughly cleaning all surfaces so your space is immediately ready for use",
    image: {src: afterBuldingCleaningImage}
  },
  {
   id: 4,
   title: "Professional Office Cleaning Service",
   description: " environment that boosts productivity. Our specialized team meticulously cleans and sanitizes offices, meeting rooms, and common areas",
    image: {src: officeImage}
  }
];
export default servicesData;