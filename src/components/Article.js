import React from "react";
import BlogImage1 from "../img/blog-image-1.jpg";
import BlogImage2 from "../img/blog-image-2.jpg";
export default function Article() {
  return (
    <>
      <main>
        <span>11/12/20</span>
        <h3>On the Street in Brooklyn</h3>
        <img src={BlogImage1} alt="woman walking in brooklyn " />

        <article>
          <p>
            Coruppti ipsum dolor sit amet consectetur adipisicing elit. Fuga
            officiis, commodi quod corrupti, deserunt quae sequi laudantium
            nihil ad consequuntur incidunt vero. Labore, adipisci accusantium
            quisquam cumque ipsum eveniet cum fugit, excepturi possimus laborum
            distinctio aliquid, illo eum quo voluptas officiis hic? Voluptas
            dolorum quibusdam, impedit autem voluptatum praesentium veniam.
            Dolores magni nam quod inventore consequatur! Aut nemo maiores iste
            praesentium? Illo harum error delectus non voluptatibus aliquam
            nulla est veritatis, dolorum nam itaque eum quasi minus totam
            architecto tempore minima cumque iste praesentium sapiente eligendi
            sit provident saepe! Ut voluptatem non quia, odio nesciunt
            aspernatur id, doloribus est obcaecati ducimus excepturi magni
            soluta quis eius vel? Quasi accusamus similique quas eius,
            perferendis necessitatibus eos, tenetur tempore cupiditate ex saepe
            qui culpa illo voluptate, iure adipisci alias libero magnam et
            delectus laudantium laboriosam? Eius sapiente excepturi quibusdam
            voluptas laboriosam maxime!
            <div className="continues-blogpost">Continues...</div>
          </p>
        </article>

        <span>11/11/20</span>
        <div class="blogentry-2">
          <h3>Vintage In Vogue</h3>
          <img src={BlogImage2} alt="haute couture models posing" />
          <article>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus tenetur esse saepe sunt architecto? Voluptatum
              praesentium sint reiciendis accusamus veritatis aperiam obcaecati?
              Dolorum ullam illo possimus nam neque officiis quasi mollitia modi
              odio? Illo deleniti consectetur numquam rerum dolore, esse
              nesciunt suscipit nihil mollitia dignissimos inventore possimus
              necessitatibus! Minima repudiandae molestiae illum velit,
              assumenda ipsam hic officia fuga dolorum eveniet saepe modi
              doloremque at blanditiis cupiditate tempora placeat reprehenderit
              pariatur quas libero voluptatibus omnis illo atque iure?
              Doloremque, nobis possimus tenetur nesciunt odit voluptatibus
              architecto repellendus similique perferendis ipsum aliquid vel
              quod natus magni quo, eum quis voluptate sunt veniam commodi sit
              alias numquam repudiandae. Eos eum est harum esse, fugit
              reiciendis? Sapiente vero, corporis atque et aliquid repellat
              soluta inventore consectetur cumque, possimus architecto! Alias
              quae aspernatur est, itaque, perspiciatis tenetur, ipsa officia
              deserunt at velit culpa voluptatibus consequuntur.
              <div className="continues-blogpost">Continues...</div>
            </p>
          </article>
        </div>
      </main>
    </>
  );
}
