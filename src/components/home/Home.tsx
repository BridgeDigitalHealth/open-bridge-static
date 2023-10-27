import {ReactComponent as PastelLogoImage} from '@assets/site_logo_pastel.svg'
import PageShell from '@components/widgets/PageShell'
import {Section} from '@components/widgets/Styled'
import {Box, Grid, Hidden, Typography} from '@mui/material'
import {colors} from '@style/theme'
import * as React from 'react'
import {FunctionComponent} from 'react'
import {HowItWorksDesktop, HowItWorksMobile} from './HowItWorks'
import Partners from './Partners'
import Science from './Science'

// with property e.g. const Item = styled(Box)<{test?: number}>(({theme, test}) => ({

const Home: FunctionComponent<{onJoin: () => void}> = ({onJoin}) => {
  return (
    <PageShell onJoin={onJoin}>
      <Grid container>
        <Grid item xs={12}>
          <Section>
            <Grid container rowSpacing={1} columnSpacing={{xs: 4, lg: 5}}>
              {/*header */}
              <Grid item xs={12} lg={7}>
                <Typography variant="h1">Open Bridge</Typography>
                <Typography
                  variant="largeBodyCopy"
                  maxWidth="800px"
                  component={'p'}
                  mb={0}
                  mt={10}>
                  Open Bridge delivers digital tests of cognition to research study participants through a smartphone app, allowing researchers to conduct their studies remotely. Our mission includes the creation of a library of well-validated and easy-to-use remote health measures that are widely available to the entire research community&mdash;particularly those studying cognitive function and aging.{' '}
                </Typography>
              </Grid>
              <Box
                component={Grid}
                item
                xs={5}
                textAlign="right"
                display={{xs: 'none', lg: 'block'}}>
                <PastelLogoImage />
              </Box>
            </Grid>
          </Section>
          <Box sx={{backgroundColor: colors.purpleTransparency2}}>
            <Section>
              <Science />
            </Section>
          </Box>
          {/*how it works*/}
          <Section>
            <Hidden lgUp>
              <HowItWorksMobile />
            </Hidden>
            <Hidden lgDown>
              <HowItWorksDesktop />
            </Hidden>
          </Section>
          {/*
          <Box
            sx={{
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left bottom',
              backgroundImage: {lg: 'url(' + bgExperiences + ')'},
            }}>
            <Section>
              <Experiences />
            </Section>
          </Box>
          <Box
            bgcolor={colors.purpleTransparency2}
            sx={{
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundImage: {lg: 'url(' + bgSecurity + ')'},
            }}>
            <Section>
              <Security />
            </Section>
          </Box>*/}
          {/* <Section>
            <About />
          </Section>*/}
          <Box bgcolor={colors.purpleTransparency2}>
            <Section>
              <Partners />
            </Section>
          </Box>
          {/* <Box bgcolor={colors.purpleTransparency2}>
            <Section>
              <Project />
        </Section>
          </Box>
          <Section>
            <Contribute />
          </Section>*/}
        </Grid>
      </Grid>
    </PageShell>
  )
}
export default Home
