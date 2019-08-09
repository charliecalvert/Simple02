import React from 'react';
import { InputText } from '@bit/primefaces.primereact.inputtext';
import { Tooltip } from '@bit/primefaces.primereact.tooltip';
import PrimereactStyle from '@bit/primefaces.primereact.internal.stylelinks';

class Example extends React.Component {
    constructor() {
        super();
        this.state = { title: null, tooltipPosition: 'right' };
        this.onTooltipPosition = this.onTooltipPosition.bind(this);
    }


    onTooltipPosition(e) {
        let element = e.target;

        switch (element.id) {
            case 'username':
                this.setState({
                    title: 'Enter your username',
                    tooltipPosition: 'right'
                });
                break;

            case 'surname':
                this.setState({ title: 'Enter your surname', tooltipPosition: 'top' });
                break;

            case 'age':
                this.setState({ title: 'Enter your age', tooltipPosition: 'bottom' });
                break;

            case 'email':
                this.setState({ title: 'Enter your email', tooltipPosition: 'left' });
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <PrimereactStyle/>
                <div className='content-section implementation'>
                    <h3>Positions</h3>
                    <div className='p-grid p-fluid'>
                        <div className='p-col-12 p-md-3' style={{ marginTop: 8 }}>
                            <InputText
                                type='text'
                                placeholder='Right'
                                tooltip='Enter your username'
                            />
                        </div>
                        <div className='p-col-12 p-md-3' style={{ marginTop: 8 }}>
                            <InputText
                                type='text'
                                placeholder='Top'
                                tooltip='Enter your username'
                                tooltipOptions={{ position: 'top' }}
                            />
                        </div>
                        <div className='p-col-12 p-md-3' style={{ marginTop: 8 }}>
                            <InputText
                                type='text'
                                placeholder='Bottom'
                                tooltip='Enter your username'
                                tooltipOptions={{ position: 'bottom' }}
                            />
                        </div>
                        <div className='p-col-12 p-md-3' style={{ marginTop: 8 }}>
                            <InputText
                                type='text'
                                placeholder='Left'
                                tooltip='Enter your username'
                                tooltipOptions={{ position: 'left' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Example;
