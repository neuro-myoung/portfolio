import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>About</h1>
                <div className={styles.content}>
                    <Image src="/profile_yellowcircle_small.png"  width={ 337 } height={ 300 } alt="profile picture"/>
                    <div className={styles.textBlock}>
                        <p className={styles.par}>
                            I'm currently pursuing a doctorate in Neurobiology at Duke University. Broadly, I am interested in how
                            cells specialize to sense mechanical forces and integrate information about the physical constraints of their environment. I
                            am currently working in the laboratory of Dr. Jorg Grandl where I am working on developing new tools to determine the roles ion
                            channels play in sensing forces on a cellular scale.
                        </p>
                        <p className={styles.par}>
                            I have always had a strong motivation to learn new skills that can help make me be a more productive
                            scientist and person in general.
                            As a result, on top of my work in the lab I have built skills in general purpose programming, web
                            development, and 3D modeling and
                            animation using Blender. In my free time I am an avid fan of film. I also enjoy cycling and one day
                            hope
                            to make the ride from coast to coast across the US.
                        </p>
                        <p className={styles.par}>
                            Feel free to explore my website to learn more about me and contact me if you have any questions.
                        </p>
                    </div>
                </div>      
            </div>          
        </>
     );
}
 
export default About;