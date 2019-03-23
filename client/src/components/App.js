import React, { memo, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useMeasure, usePrevious } from "./helpers";
import { Global, Frame, Content, toggle } from "./styles";
import * as Icons from "./icons";

const Tree = memo(({ children, name, style, open = false }) => {
  const [isOpen, setOpen] = useState(open);
  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
    },
  });
  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <span style={{ verticalAlign: "middle", ...style }}>{name}</span>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <animated.div style={{ transform }} {...bind}>
          {children}
        </animated.div>
      </Content>
    </Frame>
  );
});

const App = () => (
  <>
    <Global />
    <Tree name="Poké Heist!" open>
      <Tree name="Primary Goal">
        <Tree name="Steal the Poké Balls from Coit Tower" />
      </Tree>
      <Tree name="Secondary Goals (not mandatory)">
        <Tree name="Don't Get Arrested" />
        <Tree name="Kidnap Pikachu from the twerps(Ash and Co)" />
        <Tree name="Blast off again" />
      </Tree>
      <Tree name="Assumptions">
        <Tree name="As Team Rocket we have immediate access to the Meowth Ballon (hot air balloon)" />
        <Tree name="The twerps are in the vicinity" />
        <Tree name="When awoken, Snorlax will become aggressive and attack anything nearby as he does in the games(immediately attacks player)." />
        <Tree name="The City of San Francisco does not have easy access to a Poké Flute or Snorlax would be gone." />
        <Tree name="Team Rocket members are superhumanly durable, as seen when surviving falls at terminal velocity unscathed." />
      </Tree>
      <Tree name="Heist!">
        <Tree name="Are we able to spend a fair amount of time and resources preparing?">
          <Tree name="Yes">
            <div
              style={{
                position: "relative",
                width: "50%",
                height: 200,
                padding: 10,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  color: "#f2eebd",
                  padding: 10,
                  background:
                    "linear-gradient(135deg,#c5036e 0%, #707dbf 100%)",
                  whiteSpace: "normal",
                  overflowY: "scroll",
                  overflowX: "none",
                  borderRadius: 5,
                }}
              >
                <p>
                  In preparation for the Heist we, Team Rocket will procure a
                  number of fake Poké Balls similar to the number we believe are
                  in Coit Tower. We'll also build a Faraday's cage around the
                  hot air ballon basket to protect from preemptive thunderbolts.
                  Ideally we'd build the cage in such a way that it directs the
                  electricity away from the balloon aparatus. We will disguise
                  the balloon aparatus, using the name "Team Twerps" and
                  decorating the top half in the likeness of Ash's iconic hat.
                  We'd also need to procure a police scanner, brightly colored
                  spray paint, and low yield explosives large enough to blow up
                  a truck. Lastly we'd scope out the security around the Poké
                  Balls while in disguise.
                </p>
              </div>
            </div>
            <Tree name="Can we choose the specific date and time of the heist?">
              <Tree name="Yes">
                <Tree name="The date and time should coincide with the SF Anime and Cosplay festival">
                  <Tree name="Uniforms won't stand out as much" />
                  <Tree name="Crazy anime hairstyles wont stand out as much" />
                  <Tree name="Average citizens will be less likely to immediately call the cops if cosplayers are wandering the city" />
                </Tree>
                <Tree name="rent commercial/industrial property on the edge of the festival area">
                  <Tree name="Must have street access in back and front" />
                </Tree>
                <Tree name="rent a moving truck and park it out back of the rented commercial/industrial property" />
              </Tree>
              <Tree name="No">
                <Tree name="rent commercial/industrial property near highway access">
                  <Tree name="Must have street access in back and front" />
                </Tree>
              </Tree>
            </Tree>
            <Tree name="rental property decor">
              <div
                style={{
                  position: "relative",
                  width: "50%",
                  height: 100,
                  padding: 10,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "#f2eebd",
                    padding: 10,
                    background:
                      "linear-gradient(135deg,#c5036e 0%, #707dbf 100%)",
                    whiteSpace: "normal",
                    overflowY: "scroll",
                    overflowX: "none",
                    borderRadius: 5,
                  }}
                >
                  <p>
                    We'll fill the room with children's festival type games and
                    most importantly an empty ball pit with signs around it
                    saying "Closed for cleaning child vomit. DO NOT USE".
                  </p>
                </div>
              </div>
            </Tree>

            <Tree name="Make sure to not execute plan during rush hour, to avoid collateral damage when detonating the truck" />
            <Tree name="Is Snorlax asleep on Lombard after it intersects with Grant?">
              <Tree name="Yes">
                <Tree name="Drop off Meowth with the Poké flute  and police scanner near the Snorlax" />
                <Tree name="Meowth tracks police progress on police scanner and awakens the Snorlax when police take foot paths past Snorlax" />
                <Tree name="If police are not alerted to Coit Tower robbery, Meowth awakens Snorlax when Meowth Balloon leaves Coit to consume police resources." />
              </Tree>
              <Tree name="No">
                <Tree name="In this case Snorlax is not blocking the only direct vehicle path to Coit Tower" />
                <Tree name="Awaken Snorlax when Meowth Ballon lands at Coit Tower to create a distraction" />
              </Tree>
            </Tree>
            <Tree name="Fly to Coit Tower" />
            <Tree name="Recommend visitors leave for to check out a Poké battle nearby" />
            <Tree name="Have Arbok use Glare to paralyze anyone who stays" />
            <Tree name="Break or disable any security, then load Poké Balls into classic team rocket net" />
            <Tree name="If needed have Weezing clear the path to the disguised Meowth Balloon with poison gas" />
            <Tree name="Fly to rented commericial/industrial space" />
            <Tree name="Do the Poké Balls fit in the Meowth Balloon basket?">
              <Tree name="If yes, spray pain them a monchromatic bright color in transit." />
              <Tree name="If no, spray paint them in the ball pit on arrival" />
            </Tree>
            <Tree name="Put painted, stolen Poké Balls in ball pit.  Place conterfeit Poké Balls in truck out back and rig with explosive." />
            <Tree name="James drives truck out away onto the highway, away from the safehouse." />
            <Tree name="20 minutes after James leaves, Jessie calls in an anonymous tip from a public establishment that a suspicious looking character loaded a bunch of Poké Balls into a truck with the rented truck's license plate." />
            <Tree name="Does James encounter the twerps of police before driving for 30 minutes?">
              <Tree name="If yes, James sets off the explosives before police can approach to close, or as a Thunderbolt is launched at the truck." />
              <Tree name="If no, James finds a relatively empty stretch of road, leaps from the truck and detonates the explosives." />
            </Tree>
            <Tree name="James goes blasting off again" />
            <Tree name="James takes a Lyft back to festival area" />
            <Tree name="The explosion with counterfeit Poké Balls ideally makes authorities believe Coit Tower Poké Balls were destroyed." />
            <Tree name="if rented space is looked at, the sign about vomit in the ball pit should disuade anything more than cursory investigation" />
            <Tree name="Jesse and James then in disguise move the real Poké Balls a few at a time to a local Team Rocket Safe house or a Team Rocket Submarine" />
            <Tree name="If moved to submarine, pedal Poké Balls to international waters, and/or nearest Team Rocket base" />
          </Tree>
          <Tree name="No">
            <Tree name="Execute the plan during the height of rush hour to slow police response" />
            <Tree name="Drop off Meowth with the Poké flute near the Snorlax" />
            <Tree name="Fly to Coit Tower" />
            <Tree name="Have Arbok use Glare on anyone inside to paralyze them." />
            <Tree name="Smash security system and wrap all the Poké Balls with the classic team rocket net" />
            <Tree name="Have Weezing expel poisonous gas outside the tower to clear a route to the Meowth Balloon" />
            <Tree name="Is Snorlax asleep on Lombard after it intersects with Grant?">
              <Tree name="Yes">
                <Tree name="Wait until the Police have just gotten past the Snorlax via alternative foot paths" />
                <Tree name="Meowth wakes up the Snorlax with Poké Flute" />
                <Tree name="Assuming Snorlax acts as he does in game, he'll immediately become hostile to those around him" />
              </Tree>
              <Tree name="No">
                <div
                  style={{
                    position: "relative",
                    width: "50%",
                    height: 180,
                    padding: 10,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      color: "#f2eebd",
                      padding: 10,
                      background:
                        "linear-gradient(135deg,#c5036e 0%, #707dbf 100%)",
                      whiteSpace: "normal",
                      overflowY: "scroll",
                      overflowX: "none",
                      borderRadius: 5,
                    }}
                  >
                    <p>
                      Since Grant Street now offers a straight shot unobstructed
                      by Snorlax, we have to adapt. Jessie and James launch a
                      signal flare on landing at Coit Tower to notify Meowth.
                      The average police response time in SF is 5 minutes and 28
                      seconds. To be safe we assume the crime is reported
                      immediate. Meowth begins playing the 20ish second melody
                      necessary to awaken Snorlax 2 minutes after the flare. The
                      police response should divert to deal with a rampaging
                      Snorlax during the height of rush hour.
                    </p>
                  </div>
                </div>
              </Tree>
              <Tree name="Police forced to deal with Snorlax" />
              <Tree name="Jessie and James give intro speech about denouncing the evils of truth and love" />
              <Tree name="Jessie and James fly off with the Poké Balls while emergency services and twerps are busy dealing with a rampaging Snorlax" />
            </Tree>
            <Tree name="Concerns">
              <Tree name="Chance of maintaining custody over Poké Balls until they can be delivered to a Team Rocket safe house seems low unless there is one easily accessible in San Francisco" />
              <Tree name="High risk of coast guard, highway patrol, air force or twerps hunting down the Meowth Balloon during extended travel" />
              <Tree name="If possible perform heist after prep work" />
            </Tree>
          </Tree>
        </Tree>
      </Tree>
    </Tree>
  </>
);

export default App;
