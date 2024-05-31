import { features } from "process";

interface ICard {
    name: string,
    level: string,
    price: string,
    featureList: string[],
    readMoreText: string,
    payPalId: string,
}

const Card: React.FC<ICard> = (card: ICard ) => {
    return (
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <ul className="list-unstyled">
              <li className="price h4">
                <span>{card.name}</span>{card.level}<br></br>{card.price}
                <div className="trainingAndMealPlan mt-3">
                  <img src="https://via.placeholder.com/100" alt="Placeholder" />
                </div>
              </li>
              {card.featureList.map((el, i) => <li key={`${i}_${el}`}>{el}</li>)}
              {/* <li>ALL BASIC FEATURES</li>
              <li>16 WEEK DURATION</li> */}
              {/* <li><button type="button" class="btn btn-red btn-custom robo popup-trigger popmake-680" data-popup-id="680" data-do-default="0">Read More</button></li> */}
            </ul>
          </div>
          <div className="card-footer">
          {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">


            <input type="hidden" name="cmd" value="_s-xclick"/>


            <input type="hidden" name="hosted_button_id" value=""/>


            <input type="submit" className="btn btn-red btn-custom robo" border={0} name="PURCHASE" value="PURCHASE" alt="PayPal – The safer, easier way to pay online!"/>
            </form> */}

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="77QKFZUT48UBN" /> {/* Unique PayPal Value */}
              <input
                type="submit"
                className="btn btn-primary btn-custom w-100"
                name="PURCHASE"
                value="PURCHASE"
                alt="PayPal – The safer, easier way to pay online!"
              />
            </form>
          </div>
        </div>
      </div>
    )
}

export default Card;