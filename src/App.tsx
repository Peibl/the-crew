import React from 'react';
import './App.css';

const {useState} = React;

function App() {
    let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let cardsColors = ['pink', 'blue', 'yellow', 'green']
    let rockets = [1, 2, 3, 4]
    const Card = (cardValue: number, type: string) => {
        const [isSelected, select] = useState(false)
        const classes = `${type} ${isSelected ? 'selected' : ''} `
        return <div className={classes} style={styles.card}
                    onClick={() => {
                        select(!isSelected);
                    }}> {cardValue} </div>
    }
    return (
        <div className="App">
            <div style={styles.container}>
                <h2 style={{color: 'white'}}>The Crew</h2>
                <div style={styles.section}>
                    {rockets.map(it => {
                        return Card(it, 'rocket')
                    })}
                </div>
                {cardsColors.map(color => {
                    return <div style={styles.section}>
                        {cards.map(it => {
                            return Card(it, color)
                        })}
                    </div>
                })}
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#282c34',
    } as React.CSSProperties,
    card: {
        margin: 10,
        padding: 20,
        borderRadius: 10,
        width: '25',
        height: '50',
    } as React.CSSProperties,
    section: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    } as React.CSSProperties

}
export default App;
