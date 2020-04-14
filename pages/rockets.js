import gql from "graphql-tag";
import { Query } from '@apollo/react-components';
import Link from 'next/link';
import "../public/static/loader.css"

const GET_ROCKETS = gql`
      query {
        rockets(limit: 10) {
          company
          country
          id
					name
					first_flight
        }
      }
      
    `;

const Rockets = () => (
  <Query
    query={GET_ROCKETS}
  >
    {({ loading, error, data }) => {
      if (loading) return (
				<div className="loadingio-spinner-bars-g99922nc3eg">
					<div className="ldio-w2ga5b317p">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>);
      if (error) return <p>Error :(</p>;
    
      return data.rockets.map(({ country, name, id }) => (
      <Link  href={`/rocket/${id}`} >
        <div className="card" >
          <div className="card-image">
            <figure className="image is-480x723" >
                <img src={`/${id}.jpg`} alt="Placeholder image" class="image is-480x723"/>
            </figure>            
          </div>
          <div className="card-content">
            <div className="Content">
              <div>
                Name: {name}
              </div>
							<br/>
              <div>
                Country: {country}
              </div>
            </div>
          </div>
        </div>
        </Link>

      ));
    }}
      
  </Query>
);

export default Rockets;