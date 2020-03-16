import React, { Component } from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

import { FaUserAstronaut } from 'react-icons/fa';

export default class NavBar extends Component {
    render() {
        return (
            <>
                <nav>
                    <div>
                        <Link to="/">
                            <img
                                src="https://static.wixstatic.com/media/a67967_39a809b9646649dfb10afd40ba5c5034~mv2.png/v1/crop/x_96,y_104,w_332,h_565/fill/w_29,h_48,al_c,q_85,usm_0.66_1.00_0.01/a67967_39a809b9646649dfb10afd40ba5c5034~mv2.webp"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="divLinks">
                        <div className="myLinks">
                            <Link to="/readVagas">Calendario</Link>
                        </div>
                        <div className="myLinks">
                            <Link to="/makeVagas">Criar Vagas</Link>
                        </div>
                        <div className="myLinks">
                            <Link to="/editVagas">Editar Vagas</Link>
                        </div>
                        <div className="myLinks">
                            <Link to="/cardsPage">Minhas Vagas</Link>
                        </div>
                    </div>
                    <div className="divMiddle"></div>
                    <div className="divProfile">
                        <FaUserAstronaut />
                        <p>Star Labs Inc.</p>
                    </div>
                </nav>
            </>
        );
    }
}
