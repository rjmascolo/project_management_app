import React from 'react'
import { Icon, Grid, Step } from 'semantic-ui-react'

const DeliverablesContainer = () => (
  <Grid columns={1}>
    <Grid.Column>
      <Step.Group fluid vertical>
        <Step completed>
          <Icon name='truck' />
          <Step.Content>
            <Step.Title>2-3 Mock ups</Step.Title>
            <Step.Description>xyz</Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Icon name='dollar' />
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    </Grid.Column>
  </Grid>
)

export default DeliverablesContainer
