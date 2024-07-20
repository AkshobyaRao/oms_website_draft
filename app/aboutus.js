import "../app/globals.css"
import Image from "next"
export default function Home() {
  return (
    <div className="about">
        <section>
            <div className="green">
                <h1>Our Legacy of Excellence</h1>
                <p>
                    With a rich heritage in healthcare, Ojas has been a respected name in the industry for over [number] years. We are committed to advancing healthcare standards through our expertise in [specific area, e.g., medical devices, pharmaceuticals], ensuring excellence in every product we offer.
                </p>
            </div>
        </section>
        <section>
            <div className="orange">
                <h1>Our Commitment to Excellence</h1>
                <p>
                    With a rich heritage in healthcare, Ojas has been a respected name in the industry for over [number] years. We are committed to advancing healthcare standards through our expertise in [specific area, e.g., medical devices, pharmaceuticals], ensuring excellence in every product we offer.
                </p>
                <button className="underline">
                    Learn More
                </button>
            </div>
        </section>
    </div>
  );
}
