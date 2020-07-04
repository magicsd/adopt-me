import React, { Component } from 'react'
import { Link } from '@reach/router'

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error', info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          We got an error. Click <Link to="/">here</Link> to get back to home
          page.
        </h1>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
