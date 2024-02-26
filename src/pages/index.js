import * as React from "react"
import './styles.css'
import '@fontsource/rubik'
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"


const IndexPage = () => {
  return (
    <main>
      
      <section className="hero-section">
        <div className="hero-wrapper">
          <h2>bienestar y salud</h2>
          <p>pausas aromaticas para promover un ambiente de trabajo saludable</p>
          <StaticImage className="hero-bg-img" src="../images/stock.jpg"></StaticImage>
        </div>
      </section>


      <section className="section queEs-section">
        <div className="main-section-container que-es-container">
          <h1>Pausas Aromaticas</h1>
          <StaticImage src='../images/stock.jpg' className="fake-img ques-img"></StaticImage>
          <p>nderit voluptatem animi, asperiores magni soluta architecto nostrum tempora minima suscipit provident atque consequatur quidem alias cumque dolore ipsum, ratione cum repellendus molestias et, officiis sapiente vel. Nulla suscipit fuga sunt ipsam, voluptas molestiae nesciunt at iusto rem voluptates. Maxime perferendis a laudantium odio, sint repellendus tempore itaque ipsam voluptates doloribus commodi cum laborum saepe magni voluptatibus reprehenderit eius quaerat ad quod sed sequi explicabo excepturi distinctio ex. Exercitationem quod cum repellendus doloribus doloremque! Animi, ut distinctio. Inventore eos est exercitationem quidem ut voluptate maiores excepturi e</p>
        </div>
      </section>
      
      
      <section className="section servicios-section">
        <div className="main-section-container servicios-container">
          
          <h1>Servicios</h1>
          <div>
          <StaticImage src='../images/stock.jpg' className="fake-img"></StaticImage>
            <h2>pausas lavanda</h2>
            <p>rovident? Nesciunt aut dignissimos, deleniti quaerat hic id expedita ipsa suscipit soluta molestiae. Quibusdam excepturi adipisci beatae ab corporis, nulla mollitia, provident laborum quisquam harum, doloribus enim. Nostrum, neque? Ipsa assumenda soluta neque cumque dicta voluptate rem, accusantium tenetur facere, fugiat reiciendi</p>
          </div>
          
          <div>
          <StaticImage src='../images/stock.jpg' className="fake-img"></StaticImage>
            <h2>pausas eucalipto</h2>
            <p>rovident? Nesciunt aut dignissimos, deleniti quaerat hic id expedita ipsa suscipit soluta molestiae. Quibusdam excepturi adipisci beatae ab corporis, nulla mollitia, provident laborum quisquam harum, doloribus enim. Nostrum, neque? Ipsa assumenda soluta neque cumque dicta voluptate rem, accusantium tenetur facere, fugiat reiciendi</p>
          </div>
          
          <div>
          <StaticImage src='../images/stock.jpg' className="fake-img"></StaticImage>
            <h2>pausas bergamota</h2>
            <p>rovident? Nesciunt aut dignissimos, deleniti quaerat hic id expedita ipsa suscipit soluta molestiae. Quibusdam excepturi adipisci beatae ab corporis, nulla mollitia, provident laborum quisquam harum, doloribus enim. Nostrum, neque? Ipsa assumenda soluta neque cumque dicta voluptate rem, accusantium tenetur facere, fugiat reiciendi</p>
          </div>

        </div>
      </section>
      
      
      <section className="section quienesSomos-section">
        <div className="main-section-container quienesSomos-container">
          <h1>nuestra historia</h1>
        <StaticImage src='../images/stock.jpg' className="quienes-img fake-img"></StaticImage>
          <p>iores excepturi ea, debitis eimus minus optio, ulam aspernatur provident? Nesciunt aut dignissimos, deleniti quaerat hic id expedita ipsa suscipit soluta molestiae. Quibu fugiat reiciendis obcalexplicabo commodi alias minus voluptates unde temporibus magni. Qui delectus eveniet itaque, modi commodi quod labore facilis repellendus ducimus ipsam autem aut illo asperiores doloremque dolores. Debitis nihil voluptates ex voluptatem quibusdam explicabo illo eligendi sed est, deleniti temporibus eaque nostrum enim pariaimus minus optio, ulam aspernatur provident? Nesciunt aut dignissimos, deleniti quaerat hic id expedita ipsa suscipit soluta molestiae. Quibu fugiat reiciendis obcaletur maxime corruptiimus minus optio, ulam aspernatur provident? Nesciunt aut dignissimos, deleniti quaerat hic id expedita ipsa suscipit soluta molestiae. Quibu fugiat reiciendis obcale culpa natus quae totam dignissimos dicta sunt magnam tempora. Suscipit, praesentium numquam inventore cupiditate dicta sapiente. Consectetur blanditiis et facere ab possimus, sunt molestiae voluptatum in sequi quo labore modi animi totam illum exercitationem placeat ducimus minus optio, ulam aspernatur provident? Nesciunt aut dignissimos, deleniti quaerat hic id expedita ipsa suscipit soluta molestiae. Quibu fugiat reiciendis obcalecati. Quae beatae imus minus optio, ulam aspernatur provident? Nesciunt aut dignissimos, deleniti quaerat hic id expedita ipsa suscipit soluta molestiae. Quibu fugiat reiciendis obcaledolcoremque quo odit accusantium quis ipsam voluptate deleniti,imus minus optio, ulam aspernatur provident? Nesciunt aut dignissimos, deleniti quaerat hic id expedita ipsa suscipit soluta molestiae. Quibu fugiat reiciendis obcale maiores nesciunt a commodi vel eius dicta recusandae porro cumque? Quibusdam asperiores, sequi non eligendi quaerat porro, provident obcaecati facilis quae nobis nulla dolor beatae repre</p>
        </div>
      </section>
      
      
      <section className="section CTA-section">
        <div className="main-section-container CTA-container">
          <h1>Trabaja con nosotros</h1>
          <div>formulario de contacto/ calendario</div>
        </div>
      </section>
      
      
      <footer>
        <ul className="social-media-container">
          <li className="li-Instagram"><a target='_blank' rel="noreferrer" href="https://www.instagram.com/ornela_bienestarysalud/"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
          <li className="li-Facebook"><a target='_blank' rel="noreferrer" href="https://www.instagram.com/ornela_bienestarysalud/"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
          <li className="li-LinkedIn"><a target='_blank' rel="noreferrer" href="https://www.instagram.com/ornela_bienestarysalud/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
        </ul>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
