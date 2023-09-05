import { star } from "../assets/icons";
import { customer1, customer2 } from "../assets/images";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            imgURL={review.imgURL}
            key={review.customerName}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          ></ReviewCard>
        ))}
      </div>
    </section>
  );

  return (
    <section>
      <div className="flex flex-col justify-center items-center mb-10 bg-red-100">
        <h3 className="text-4xl font-semibold font-montserrat mb-5">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h3>
        <p className="font-palanquin text-slate-gray text-[19px] text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <img
            src={customer1}
            alt="customer 1"
            width={140}
            height={140}
            className="rounded-full"
          />

          <div>
            <p>
              The attention to detail and the quality of the product exceeded my
              expectations. Highly recommended!
            </p>

            <img src={star} alt="" />
            <span>(4.5)</span>
          </div>
          <p>Morich Brown</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={customer2}
            alt="customer 1"
            width={140}
            height={140}
            className="rounded-full"
          />

          <div className="flex flex-col text-center justify-center items-center">
            <p>
              The product not only met but exceeded my expectations. I'll
              definitely be a returning customer!
            </p>
            <div className="flex gap-2">
              <img src={star} alt="" />
              <span>(4.5)</span>
            </div>
          </div>
          <p>Lota Mongeskar</p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
