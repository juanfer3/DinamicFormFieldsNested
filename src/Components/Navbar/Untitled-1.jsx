<Grid  >

                    <Form>
                    

                    <TextField
                    id="standard-name"
                    label="Post"
                    margin="normal"
                    />

                    <Grid container spacing={6} /> 

                    <Button variant="contained" color="primary">
                        Add Articles
                    </Button>


                    <Grid container spacing={6} />   

                    <TextField
                    id="standard-name"
                    label="Article Name"
                    margin="normal"
                    />

                    </Form>
                </Grid>


                {this.createUI()}        
                    <input type='button' value='add more' onClick={this.addClick.bind(this)}/>
                    <input type="submit" value="Submit" />