import React from 'react';

const Info = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 0',
            opacity: 0.7
        }}>
            <div style={{
                position: 'relative',
                width: '70px',
                height: '70px',
                border: '4px solid black',
                borderRadius: '50%',
                marginBottom: '15px',
                backgroundColor: 'transparent'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '25px',
                    left: '18px',
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'black',
                    borderRadius: '50%'
                }}></div>

                <div style={{
                    position: 'absolute',
                    top: '25px',
                    right: '18px',
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'black',
                    borderRadius: '50%'
                }}></div>

                <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '30px',
                    height: '15px',
                    border: '4px solid black',
                    borderBottom: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderRadius: '50% 50% 0 0'
                }}></div>
            </div>

            <span style={{
                fontFamily: 'monospace',
                fontSize: '1.1rem',
                fontWeight: '900',
                color: 'black',
                letterSpacing: '1px',
                textTransform: 'uppercase'
            }}>
                No task completed yet..
            </span>
        </div>
    );
};

export default Info;