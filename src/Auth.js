import React from 'react'

import Button from '@material-ui/core/Button'

class Auth extends React.Component {
    state = {
        isUserLoggedIn: false,
    }

    render() {
        return (
            <div>
                {
                    this.state.isUserLoggedIn ?
                        this.props.children
                        :
                        <div>
                            <Button
                                variant={'contained'}
                                color={'secondary'}
                            >
                                LOGIN BY GOOGLE
              </Button>

                        </div>
                }
            </div>
        )
    }
}
export default Auth
