"use client"
import Image from "next/image"
import { ImageMaloi, ParaText } from './about.styled';



 const About = () => {
    return (
        <main>
            <div>
            <ImageMaloi src={"./maloi.jpg"} width={120} height={120} alt="AI Maloi representation"/>




            <ParaText>I have worked in the software market for
over 20 years, In addition to academic education in renowned schools in Brazil.
With perennial discipline, I evolved into a Solution Architect in 2007,
modernizing the company&apos;s core system. In the early 2010s, I was already
leading projects as a project manager. I gained knowledge as a project manager
and PMO, I lived with the change from large projects to agile projects and,
later, to products.</ParaText>

<ParaText>The technical knowledge, in agile projects
and products, made me possible to add more value to the business by technically
leading the squads with good <b>TDD</b> and <b>DDD</b> processes in addition to
cutting-edge technology for creating frontend, backend, and data engineering.
With the market change, the <b>hands-on</b> potential was revalidated, and I
kept transferring the knowledge of creating solutions for the business to
squads so they can build robust and scalable solutions. Thus, transitioning
back to <b>TechLead</b> / <b>solution architect</b>.</ParaText>

<ParaText>Due to the constant business innovation, I
am seeking to update myself on the cutting-edge technologies and their tools
such as: Java, NodeJS and Python in on-premises environments and in the main
clouds <b>AWS</b>, <b>Azure</b> and <b>GCP</b>. With a holistic vision, I lead
the team to build microservices with an <b>onion/hexagonal</b> foundation using
<b>SOLID</b> Methodology. I am familiar with most of the relational. In NoSQL I
have experience with <b>MongoDB,</b> <b>DinamoDB</b> and <b>CosmosDB</b>, Redis
cache database and other types of persistence tools. I have constant knowledge
in containerization components, code repository, <b>DevOps</b> and <b>CI/CD</b>,
always seeking to be up to date. Frontend I usually opt for <b>Angular</b> or <b>React</b>,
depending on the business needs, the frontend rendered on the server is the
best option. I know the main messaging tools on the market, including <b>MQTT</b>
(<b>Mosquitto</b>, <b>RabbitMQ</b>, <b>ActiveMQ</b>), and <b>Kafka</b>.</ParaText>

<ParaText>In search of being up-to-date with the
market, I am studying the innovations of data engineering and science,
structuring in how I should be better <b>feature engineer</b>. It follows the
trends of LMMOPS and MLOPS for the continuous creation and updating models of
natural language, regression, image recognition, among others that can leverage
the business. Empowering feature engineering with <b>PySpark</b> to create the
basic layer of the <b>Data Lake</b>. </ParaText>


            </div>
        </main>
    )
}

export default About