import React from 'react'

const Container = ({ children, as = 'div' }) => {
  const Tag = as

  return (
    <Tag
      style={{
        margin: '0 auto 2rem',
        padding: '0 var(--size-gutter) var(--space-2xl)',
      }}
    >
      {children}
    </Tag>
  )
}

export default Container
