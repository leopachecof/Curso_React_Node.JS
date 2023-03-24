import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Home.css";

export function Home() {
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;

  return (
    <div className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore neque minus quibusdam voluptates vel illo rerum doloribus totam cupiditate quisquam labore molestias, laudantium quia sint at deleniti eius nulla in nisi architecto saepe tempora. Repellat velit fugiat a laborum maxime, assumenda deserunt saepe harum modi! Ipsa necessitatibus minima accusantium, repellendus ab distinctio! Eos, perspiciatis eaque, delectus quia sit odio praesentium distinctio, ut modi ducimus vitae impedit molestias atque. Consequuntur voluptatum fugit rerum totam dolore dignissimos sunt odit porro recusandae magnam perspiciatis alias a eaque nihil nesciunt consectetur sit hic voluptates assumenda cumque, mollitia dolorem nostrum. Accusamus, modi blanditiis obcaecati distinctio exercitationem, in eos optio ullam dolorem doloribus ab. Dolor modi, nemo deleniti saepe labore autem facilis corrupti. Minima eligendi vero commodi excepturi, provident labore dolorem voluptas molestias suscipit aut odit nihil nostrum incidunt ducimus? Temporibus deserunt quas optio iure pariatur autem perferendis molestiae quos eligendi, quaerat repudiandae atque, necessitatibus dolorem totam cupiditate cum fuga sed, fugiat laudantium culpa veniam nobis illum! Tempora iusto ab voluptatem nihil, itaque doloremque magnam voluptate accusantium asperiores reiciendis eum cum, eveniet soluta ullam blanditiis velit et? Sunt qui, totam eveniet autem ipsam modi perferendis quisquam neque illum aperiam repellat suscipit ullam eos amet beatae nostrum! Quam vero, veritatis soluta accusantium alias iusto debitis dolorem, amet eum recusandae corporis nam aut a! Modi earum eos quaerat tempora iste eligendi nulla. Tempora odit delectus temporibus, ducimus dolore vitae neque harum. Neque consequuntur voluptas qui. Exercitationem veniam, blanditiis eligendi commodi magni sunt corporis voluptates nemo id, possimus officia fuga dolorum, nam esse repudiandae. Dolor, cupiditate. Tenetur debitis, cumque iste dolor aperiam molestiae quam velit facere repellendus mollitia harum officiis cum excepturi similique tempore eaque nesciunt voluptatibus ratione tempora reprehenderit. Quasi beatae, ipsa sunt totam minima, molestias vitae adipisci quidem eligendi officiis excepturi reprehenderit amet ex? Omnis, nesciunt nulla?
      </p>
    </div>
  );
}
