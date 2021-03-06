const BACKEND_HOST =
  process.env.HACKADEMY_BACKEND_HOST ||
  "https://hackademy-challenges-generator.herokuapp.com";

const axios = require("axios");
const { main } = require("./utils/createRepo.js");

const prompt = require("prompt-sync")({ sigint: true });
const { configRepo } = require("./utils/configureRepo.js");

module.exports.mainHandler = async () => {
  try {
    const generationNumber = prompt(
      "Write the Prepadawans generation (or alias): "
    );

    const { data } = await axios.get(
      `${BACKEND_HOST}/getChallenges?generationNumber=${generationNumber}`
    );

    const rootFolder = await main(data.files, generationNumber);
    const createdRepoUrl = await configRepo(rootFolder, generationNumber);
    console.log(
      `Done! Remember to check the tests${
        createdRepoUrl
          ? "."
          : " and create the repo with the template option turned on."
      }`
    );
  } catch (error) {
    console.log("error", error.message);
    console.log("An error occurred. Please try again.");
    console.log(
      "If you're still getting problems, please send an email to hola@hackademy.mx"
    );
    console.log("or if you prefer, send us a tweet @hackademymx");
  }
};
