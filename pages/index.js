import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoMail,} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an Argentine app developer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Hernán Guaragna
          </Heading>
          <p>Full Stack Developer <br></br>( JavaScript / React / NodeJS / NextJS / Express )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/yocelestito1.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        I love programming, I have -according to my friends- a special ability to create real life solutions with code, I like to be in constant evolution, training and development. I really enjoy writing code with my friends/colleagues, looking for solutions together and innovating when possible.
When I am not online I am practicing fencing or yoga, or in the square with my son and my golden retriever, or watching a family movie or cooking for my family and friends.
I am currently a freelancer, but I am looking for a job where I can put my knowledge into practice within a work team.
Those who know me describe me as a positive, respectful, cheerful, charismatic and witty person.{' '}
          {/* <NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>Inkdrop</Link>
          </NextLink>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <NextLink href="https://www.youtube.com/devaslife" passHref>
            <Link target="_blank">Dev as Life</Link>
          </NextLink>
          &quot; has more than 100k subscribers. */}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born in Buenos Aires, Argentina.
          At birth I also got my Italian citizenship (I have dual citizenship).
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Law School in Buenos Aires, Argentina.
        </BioSection>

        <BioSection>
        <BioYear>2012 to 2021</BioYear>
          Worked at Atec Ingenieros Consultores S.A. 
        </BioSection>

        <BioSection>
        <BioYear>2020 to 2021 </BioYear>
          Studied Full Stack Development at Platzi, JavaScript at Coursera, UX at Google and meny other courses.
        </BioSection>

        <BioSection>
        <BioYear>2021 to present</BioYear>
          Working as a freelancer.
        </BioSection>
        <Box align='center' my={4}>
                        <a href='###' target='_blank'>
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme='teal'
                            >
                                Download Resume (CV)
                            </Button>
                        </a>
                    </Box>
        
      </Section>
      

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Fencing, Yoga, Dogs, Travels, and the Outdoors.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/hernanguaragna" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @hernanguaragna
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/hernanguaragna" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @hernanguaragna
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:hernanguaragna@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMail />}
              >
                hernanguaragna@gmail.com
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://twitter.com/hernanguaragna_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @hernanguaragna_
              </Button>
            </Link>
          </ListItem>
          
          <ListItem>
            <Link href="https://instagram.com/holasoyherni" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @holasoyherni
              </Button>
            </Link>
          </ListItem>
        </List>

        

        
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
