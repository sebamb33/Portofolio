import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSpring, animated } from 'react-spring'
const ListeCompetences = () => {
    const styles = useSpring({
        to:{ opacity: 1, color: '#2D2C26' },
        from:{ opacity: 0.4},
        delay:250,
    });
    let infoSupAffichage = document.querySelector('.infoSup');
    return ( 
        
        <div className="ListeCompetences">
            <animated.div style={styles}>
            <div className="uneCompetence">
                <div className="iconCompetence">
                    <FontAwesomeIcon icon={['fab', 'react']}/>
                </div>
                <div className="infoSup">
                    <p>Vue et appris durant  mon stage chez Ems proto ainsi qu'en autodidacte</p>
                </div>
                <p>ReactJs</p>
            </div>
            </animated.div>
            <animated.div style={styles}>
            <div className="uneCompetence">
                <div className="iconCompetence">
                    <FontAwesomeIcon icon={['fab', 'java']}/>
                </div>
                <div className="infoSup">
                    <p>Etudié durant mon BTS SIO en fesant du JEE ainsi que du Android</p>
                </div>
                <p>Java</p>
            </div>
            </animated.div>
             <animated.div style={styles}>
            <div className="uneCompetence">
                <div className="iconCompetence">
                    <FontAwesomeIcon icon={['fas', 'database']}/>
                </div>
                <div className="infoSup">
                    <p>Etudié durant le BTS SIO avec le php</p>
                </div>
                <p>Sql</p>
            </div>
            </animated.div>
             <animated.div style={styles}>
            <div className="uneCompetence">
                <div className="iconCompetence">
                <FontAwesomeIcon icon={['fab', 'php']}/>
                </div>
                <div className="infoSup">
                    <p>Etudié durant 2 ans en BTS SIO avec le modèle mvc</p> 
                </div>
                <p>Php</p>
            </div>
            </animated.div>
             <animated.div style={styles}>
            <div className="uneCompetence">
                <div className="iconCompetence">
                <FontAwesomeIcon icon={['fab', 'cuttlefish']}/>
                </div>
                <div className="infoSup">
                    <p>Etudié durant ma formation en BTS 1ère année</p>
                </div>
                <p>C#</p>
            </div>
            </animated.div>
             <animated.div style={styles}>
            <div className="uneCompetence">
                <div className="iconCompetence">
                <FontAwesomeIcon icon={['fab', 'python']}/>
                </div>
                <div className="infoSup">
                    <p>Etudié  durant ma formation (BTS) et mon stage(EMS PROTO) </p>
                </div>
                <p>Python</p>
            </div>
            </animated.div>
             <animated.div style={styles}>
            <div className="uneCompetence">
                <div className="iconCompetence">
                <FontAwesomeIcon icon={['fab', 'js-square']}/>
                </div>
                <div className="infoSup">
                    <p>
                        Etudié en autodidacte, durant ma formation ainsi que durant mon stage
                    </p>
                </div>
                <p>JavaScript</p>
            </div>
            </animated.div>
             <animated.div style={styles}>
            <div className="uneCompetence">
                <div className="iconCompetence">
                <FontAwesomeIcon icon={['fab', 'docker']}/>
                </div>
                <div className="infoSup">
                    <p>
                        Etudié durant mon bts
                    </p>
                </div>
                <p>Docker</p>
            </div>
            </animated.div>
             <animated.div style={styles}>
            <div className="uneCompetence">
                <div className="iconCompetence">
                <FontAwesomeIcon icon={['fab', 'github']}/>
                </div>
                <div className="infoSup">
                    <p>
                     <a href="https://github.com/sebamb33">@sebamb33</a>
                    </p>
                </div>
                <p>Git</p>
            </div>
            </animated.div>
             <animated.div style={styles}>
            <div className="uneCompetence">
                <div className="iconCompetence">
                <FontAwesomeIcon icon={['fab', 'android']}/>
                </div>
                <div className="infoSup">
                    <p>
                        Etudié durant mon BTS SIO
                    </p>
                </div>
                <p>Android</p>
            </div>
            </animated.div>
             <animated.div style={styles}>
            <div className="uneCompetence">
                <div className="iconCompetence">
                <FontAwesomeIcon icon={['fab', 'node-js']}/>
                </div>
                <div className="infoSup">
                    <p>
                        Etudié durant mon stage et en autodidacte 
                    </p>
                </div>
                <p>NodeJs</p>
            </div>
            </animated.div>
        </div>
        );
}
 
export default ListeCompetences;