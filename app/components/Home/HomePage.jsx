"use client";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchListings = async () => {
        try {
          const res = await fetch("http://localhost:5000/api/v1/listing");
          const data = await res.json();
          setListings(data);
        } catch (error) {
          console.error("Error fetching listings:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchListings();
    }, []);
    console.log(listings)
  
    if (loading) {
      return <p>Loading...</p>;
    }
          
    return (
        <div>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corporis deleniti nesciunt nisi quisquam tempora ea corrupti dolor architecto molestias alias distinctio, eum natus repellendus veritatis modi asperiores. Adipisci blanditiis ducimus amet similique aut voluptatum vel. Quaerat voluptatum, debitis sint magni fugiat, adipisci quisquam laborum perspiciatis nihil eveniet dolor veniam quo veritatis, facilis pariatur! Unde, consequatur voluptate? Magni, animi. Quaerat incidunt nulla eius provident odio in dolor, animi ut distinctio a praesentium voluptatibus voluptates repudiandae, corrupti optio fugiat consequatur sapiente sit vel iste, reprehenderit quasi maiores. Non inventore, voluptas neque accusamus voluptatibus perspiciatis ut, quisquam incidunt quas autem eius. Illo, neque deleniti! Harum quis voluptatibus laborum quae voluptas esse reiciendis unde officia dolor dolorum ex provident dicta quo minus aliquid facere, recusandae repudiandae ad deserunt similique. Mollitia quasi beatae natus nesciunt amet deleniti accusamus harum, eveniet rem enim porro iste nisi maiores, ipsa error, laboriosam dolorum officia corporis dolores! Autem possimus, totam ipsa porro a perferendis ratione natus cupiditate, maxime velit quod provident voluptatibus, voluptatem saepe nobis hic praesentium. Consequatur soluta culpa necessitatibus nisi provident earum iste eligendi rerum recusandae deserunt molestiae doloribus, nihil possimus quod, vitae consectetur vel. Porro, obcaecati? Deserunt rerum magni quis sint obcaecati quo sunt cupiditate incidunt. Voluptates dolorum autem amet velit quos itaque ad deleniti at dolore? Corporis unde doloribus facere ipsum, quam dolorum consequatur exercitationem cumque natus? Pariatur quae repellat odit esse vel tenetur dolores praesentium, at rerum unde quibusdam repudiandae qui odio maxime repellendus voluptas, dolore facere vitae dicta hic neque delectus? Porro hic velit tenetur nihil commodi sit distinctio optio iste sequi adipisci magnam beatae ducimus est, perspiciatis sunt. Nemo suscipit excepturi ex cupiditate rerum, odit, distinctio rem deleniti reprehenderit accusantium officia. Suscipit, deserunt nobis repellat laudantium, corporis alias non hic doloribus nemo nesciunt atque incidunt fugiat rerum quo reiciendis molestiae expedita enim a! Voluptatem reiciendis inventore nihil distinctio, commodi natus alias dolorum, soluta velit ea fugiat blanditiis reprehenderit quo sint eum quidem, sapiente repellat non iusto rem pariatur. Tempore placeat, earum nulla veritatis soluta, sed itaque hic, autem nisi labore fugiat asperiores assumenda? Aspernatur, dignissimos cupiditate. Eaque nam velit id natus a! Dicta soluta nulla tenetur excepturi commodi inventore dolores quidem doloribus ducimus quasi reiciendis voluptatibus amet id odio, assumenda in pariatur consectetur numquam laudantium eaque eligendi. Qui veniam quidem aut id dolorum laboriosam iure, consequatur nobis necessitatibus quas, in modi odio fugit maiores deleniti, laborum doloribus beatae unde. Veritatis quia neque est dignissimos. Accusantium doloribus accusamus eum, dolore delectus provident ad minima odio aliquam dolores neque aspernatur et voluptatem eveniet corporis nisi molestias eaque possimus dolorum ullam temporibus obcaecati enim. Minima sed vero vitae doloremque consectetur, ullam vel voluptates, quam inventore dolorum ducimus voluptatibus aut, provident deserunt perferendis. Fugiat laudantium officiis molestias ea sed sapiente ratione non, veritatis quibusdam magni nisi voluptates fuga mollitia at incidunt nesciunt unde assumenda? Molestias ex blanditiis saepe temporibus minus doloremque ut quaerat placeat. Nam, explicabo alias dolorem reiciendis, vitae ipsam blanditiis adipisci repellat consequuntur expedita, cupiditate ducimus? Tempore, aut! Animi possimus id libero voluptates dolorum veritatis, quos non quisquam, exercitationem delectus alias sit aut aliquam quaerat aliquid deleniti laudantium! Eaque exercitationem ad quos corporis quisquam eum animi, ea, illo non dolores quo quaerat soluta quas eos! Consequatur natus cupiditate optio amet ipsum rem iure in neque sed vel laboriosam, odio, nulla qui quos quibusdam ab perspiciatis quas? Excepturi officiis earum eum vitae omnis aliquid, dolor quidem enim ratione commodi nam deserunt tempora quasi nihil? Totam ipsum commodi dolor similique consequatur placeat unde laudantium dolorem! Placeat quasi explicabo nam accusantium, deserunt enim atque vero labore consectetur, quas asperiores, cumque aspernatur quae voluptatum! Sunt dolorum provident ducimus? Magnam tenetur deserunt maxime dolores, ipsam vero optio commodi ea voluptas. Accusamus, consectetur sunt libero tempore debitis numquam perspiciatis sequi itaque fugit sed mollitia similique quae aspernatur nam aliquid quia, porro maiores, id at cumque. Quam possimus et a ipsam minus odit fuga voluptate, numquam expedita exercitationem ipsum quo tempora. Libero ducimus officiis omnis amet labore quos tenetur architecto adipisci, nam recusandae, dicta quidem quo impedit voluptatibus porro, eveniet consequatur illum doloremque explicabo esse est neque. Repellendus.</h1>
                    
                    <p>{listings.length}</p>
        </div>
    );
};

export default HomePage;