import {
  Box,
  Flex,
  Heading,
  Tag,
  CircularProgress,
  CircularProgressLabel,
  Stack,
  Text,
  Button,
  Link,
  Hide,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getDonate } from "../../store/AppReducer/action";
import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";
import DonateModal from "./../../pages/DonateModal";
const SingleDonate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { id } = useParams();
  const donate = useSelector((store) => store.reducer.donate);
  const [item, setItem] = useState({});

  useEffect(() => {
    dispatch(getDonate());
  }, [donate?.length, dispatch]);

  useEffect(() => {
    if (id) {
      const temp = donate.find((donate) => donate.id === Number(id));
      temp && setItem(temp);
    }
  }, [donate, id]);

  const img = item["lozad src"];
  const image = {
    background: "url(" + img + ")",
    bgSize: "100%",
    backgroundRepeat: "repeat-x",
  };

  return (
    <Box>
      <Flex
        margin="auto"
        w={["95vw", "95vw", "95vw", "80vw"]}
        gap="30px"
        direction={["column", "column", "column", "column", "row"]}
      >
        <Box w={["100%", "100%", "100%", "100%", "50%"]}>
          <Box bg={"#f3f3f3"} h="60px" borderRadius="10px">
            <Text fontSize="sm" textAlign="center">
              Your donations are protected by Milaap Guarantee. 100% refund in
              the rare instance of proven misuse
            </Text>
          </Box>
          <Heading fontSize="25px" fontWeight="500" textAlign="left" m="40px">
            {item.motivation}
          </Heading>
          <Box
            w="100%"
            sx={image}
            borderRadius="3px 3px 0px 0px"
            h="450px"
            textAlign="left"
          >
            {item["tax-ribbon"] ? (
              <Tag m="10px" bg={"#9c3353"} color="white" size="lg">
                {item["tax-ribbon"]}
              </Tag>
            ) : null}
          </Box>
          <Flex m="20px 10px 10px 10px" justifyContent="space-between">
            <Flex>
              <CircularProgress
                value={item["progress-circle"]}
                color="green.300"
                size="80px"
              >
                <CircularProgressLabel>
                  {item["progress-circle"]}%
                </CircularProgressLabel>
              </CircularProgress>
              <Stack textAlign="left" m="12px">
                <Text fontSize="sm">Raised</Text>
                <Stack direction="row">
                  <Text fontSize="lg" fontWeight="500" color={"#9c3353"}>
                    {item["raised-amount"]}
                  </Text>
                  <Text fontSize="lg" fontWeight="500">
                    of Rs.35,00,000
                  </Text>
                </Stack>
              </Stack>
            </Flex>
            <Button borderRadius="15px" m="20px">
              <Link>72 suppporters</Link>
            </Button>
          </Flex>
          <Button
            bg={"#25d366"}
            color="white"
            size="lg"
            w="250px"
            borderRadius="25px"
          >
            <BsWhatsapp />
            Share
          </Button>
          <Button
            bg={"#3b5998"}
            color="white"
            w="250px"
            size="lg"
            borderRadius="25px"
            m="20px"
          >
            <BsFacebook />
            Share
          </Button>
          <Flex m="20px" justifyContent="space-around">
            <Flex border={"1px solid #e0e1e3"} w="300px">
              <Box bg={"#eddae0"} borderRadius="50%" w="50px" h="50px" m="20px">
                <Text mt="12px">
                  {item["created-name"] ? item["created-name"][0] : "A"}
                </Text>
              </Box>
              <Box m="20px">
                <Text fontSize="sm">Created by</Text>
                <Text>{item["created-name"]}</Text>
              </Box>
            </Flex>
            <Flex border={"1px solid #e0e1e3"} w="300px">
              <Box bg={"#eddae0"} borderRadius="50%" w="50px" h="50px" m="20px">
                <Text mt="12px">
                  {item["created-name"] ? item["created-name"][0] : "A"}
                </Text>
              </Box>
              <Box m="10px 5px 0px 0px">
                <Text fontSize="sm">This fundraiser will benefit</Text>
                <Text>Anusha Ashok</Text>
                <Text fontSize="sm">from Namakkal, Tamil Nadu</Text>
              </Box>
            </Flex>
          </Flex>
          <Box
            textAlign="left"
            m="10px"
            bg="#9c3353"
            color="white"
            w="200px"
            padding="15px"
            borderRadius="25px"
          >
            <Heading fontSize="xl" textAlign="center">
              Story
            </Heading>
          </Box>
          <Box w="100%" mt="30px">
            <Text textAlign="left">
             Anusha, my 7-month-old daughter, has been fighting SMA Type-1 with tenacity.

Everything felt so happy and joyful with the news of becoming parents of a beautiful daughter , in July 2022. She is a happy, bright child and the love of our life. As first-time parents we spend all of our spare time(and more!) with her. She is such a joy and brings so much positivity and love in our lives and completes our family like nothing else.

A few days ago, however, we got some shocking news that has shaken us to the core. She was diagnosed with a life-threatening rare genetic disease "Spinal Muscular Antropy (SMA)- Type 1"a severe form of disorder which means Anusha cannot control the movement of her muscles.

Over time, we are told that she will have trouble doing basic things like moving her hands, swallowing food or milk,  holding her head up and even breathing.
But we never thought life could be so unpredictable, our lives turned upside down when we learned about the disease. Our hearts broke to know my baby was caught by SMA
Her treatment is going under Dr. Swathy, Chairperson, private Hospital, New Delhi. We are being told that the treatment is available in India, but the cost is Rs. 17.42 crore (around  2,077,084.16 USD). Doctors confirm one dose of injection Zolgensma chemical name "Onasemnogene Abeparvovec-xioi" should be enough to repair the damaged gene and halt deterioration of the nerve cell.
We want to give her a chance to not only survive, but also to live a full, happy, and long life. We hope that this will give a new life to our little baby.

It seems unaffordable for a family like ours. We require your assistance in order to save our child from the clutches of this disease. Your generosity is our last hope for giving Anusha a healthy and happy life.

We do not wish to lose our baby. Let not our little warrior feel unsupported. Your donations will help her receive the right kind of help she needs. Only you can help her now!

My family and I urge you with folded hands - please consider donating. In the last few months, my family hasn’t seen a single moment of joy, and we have only now been given a shimmer of hope. Please help us with all your might to help raise the amount.

Humbly,

Ashok Kumar( Father), kavitha ashok(Mother)

Thank you for any help you can offer. please share with friends and family.
            </Text>
          </Box>
          <Box
            m="50px 0 50px 0"
            borderRadius="0px 20px 0px 20px"
            boxShadow={"2xl"}
            padding="20px"
          >
            <Text fontSize="sm">
              If something isn't right, we will work with you to ensure no
              misuse occurs.
            </Text>
            <Link color={"#9c3353"} fontSize="sm">
              Report this cause
            </Link>
          </Box>
          <Box bg={"#fceef2"} padding="20px" borderRadius="10px">
            <Box>
              <Heading m="20px" fontSize="lg">
                Supporters
              </Heading>
            </Box>
            <Box>
              <Flex>
                <Box
                  bg={"#eddae0"}
                  borderRadius="50%"
                  w="50px"
                  h="50px"
                  m="20px"
                >
                  <Text mt="12px">
                    {item["created-name"] ? item["created-name"][0] : "A"}
                  </Text>
                </Box>
                <Box padding="0px" w="400px">
                  <Text fontSize="sm" textAlign="left" mt="22px">
                    {item["created-name"]}
                  </Text>
                  <Text
                    fontSize="sm"
                    textAlign="left"
                    borderBottom={"1px solid #ead0d8"}
                  >
                    ₹1,000
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Box
                  bg={"#eddae0"}
                  borderRadius="50%"
                  w="50px"
                  h="50px"
                  m="20px"
                >
                  <Text mt="12px">A</Text>
                </Box>
                <Box padding="0px" w="400px">
                  <Text fontSize="sm" textAlign="left" mt="22px">
                    Anonymous
                  </Text>
                  <Text
                    fontSize="sm"
                    textAlign="left"
                    borderBottom={"1px solid #ead0d8"}
                  >
                    ₹7,000
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Box
                  bg={"#eddae0"}
                  borderRadius="50%"
                  w="50px"
                  h="50px"
                  m="20px"
                >
                  <Text mt="12px">
                    {item["created-name"] ? item["created-name"][0] : "A"}
                  </Text>
                </Box>
                <Box padding="0px" w="400px">
                  <Text fontSize="sm" textAlign="left" mt="22px">
                    {item["created-name"]}
                  </Text>
                  <Text
                    fontSize="sm"
                    textAlign="left"
                    borderBottom={"1px solid #ead0d8"}
                  >
                    ₹1,000
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Box
                  bg={"#eddae0"}
                  borderRadius="50%"
                  w="50px"
                  h="50px"
                  m="20px"
                >
                  <Text mt="12px">A</Text>
                </Box>
                <Box padding="0px" w="400px">
                  <Text fontSize="sm" textAlign="left" mt="22px">
                    Anonymous
                  </Text>
                  <Text
                    fontSize="sm"
                    textAlign="left"
                    borderBottom={"1px solid #ead0d8"}
                  >
                    ₹10,315
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Link color={"#9c3353"}>View all supporters</Link>
          </Box>
          <Box
            m="50px 0 50px 0"
            borderRadius="0px 20px 0px 20px"
            boxShadow={"2xl"}
            padding="20px"
          >
            <Text>
              Create a support fundraiser page and raise donations from your
              friends to help Sindhu
            </Text>
            <Button
              m="10px"
              bg="#9c3353"
              color="white"
              w="400px"
              padding="15px"
              borderRadius="25px"
            >
              Create a support fundraiser
            </Button>
          </Box>
          <Box
            m="50px 0 50px 0"
            borderRadius="0px 20px 0px 20px"
            boxShadow={"2xl"}
            padding="20px"
          >
            <Text>
              If something isn't right, we will work with you to ensure no
              misuse occurs.
            </Text>
            <Link color={"#9c3353"}>Report this cause</Link>
          </Box>
        </Box>
        <Hide below="6xl">
          <Box
            w="400px"
            h="600px"
            padding="20px"
            bg={"#f7f7f7"}
            borderRadius="10px"
          >
            <Flex justifyContent="space-between">
              <Box>
                <FaHandHoldingHeart />
                <Text>Donate</Text>
              </Box>
              <Link color={"#9c3353"}>1186 Supporters</Link>
            </Flex>
            <Flex>
              <CircularProgress
                value={item["progress-circle"]}
                color="green.200"
                size="80px"
              >
                <CircularProgressLabel>
                  {item["progress-circle"]}%
                </CircularProgressLabel>
              </CircularProgress>
              <Stack textAlign="left" m="12px">
                <Text fontSize="sm">Raised</Text>
                <Stack direction="row">
                  <Text fontSize="lg" fontWeight="500" color={"#9c3353"}>
                    {item["raised-amount"]}
                  </Text>
                  <Text fontSize="lg" fontWeight="500">
                    of Rs.35,00,000
                  </Text>
                </Stack>
              </Stack>
            </Flex>
            <Box
              bg={"#ecedee"}
              m="15px 10px 25px 10px"
              borderLeft="3px solid black"
              textAlign="left"
              padding="10px"
            >
              <Text>
                Recieve
                <span> tax benefits </span>
                by donating to this cause.
              </Text>
            </Box>
            <Button
              m="10px"
              bg="#9c3353"
              color="white"
              w="300px"
              padding="25px"
              borderRadius="25px"
              onClick={onOpen}
            >
              Donate now
            </Button>
            <Box>
              <Text fontSize="sm">Card, Netbanking, Cheque pickups</Text>
            </Box>
            <Flex>
              <Box bg={"#9c3353"} w="100px" h="1px" m="10px"></Box>
              <Text fontSize="sm" color={"#9c3353"}>
                Or Donate using
              </Text>
              <Box bg={"#9c3353"} w="100px" h="1px" m="10px"></Box>
            </Flex>
            <Box
              backgroundImage="url(../img2.jpg)"
              h="250px"
              w="250px"
              margin="auto"
            >
             
            </Box>
            <Box>
              <Text>Scan & donate with any app</Text>
            </Box>
          </Box>
        </Hide>
      </Flex>
      <DonateModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
};

export default SingleDonate;
