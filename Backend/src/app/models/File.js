import Sequelize, { Model } from "sequelize";

class File extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                path: Sequelize.STRING,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return `https://dezcontao-api.s3.amazonaws.com/${this.path}`
                    }
                }
            },
            {
                sequelize,
            }
        )
        return this;
    }
}

export default File;