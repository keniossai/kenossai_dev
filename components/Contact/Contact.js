import React, { Component } from 'react'
import {ContactBlock, Topic, Title} from './ContactStyle'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'

export default class Contact extends Component {
  render() {
    return (
      <ContactBlock>
        <Topic>Need a developer ?</Topic>
        <Link href="/service">
          <a >
              <Title>
                  Lets Collaborate  <HiOutlineArrowNarrowRight />
              </Title>
          </a>
        </Link>
      </ContactBlock>
    )
  }
}
