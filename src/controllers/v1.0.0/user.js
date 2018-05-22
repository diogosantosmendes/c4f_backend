var business = require('../../business/index').v1_0_0;
/**
 * @apiDefine auth
 * 
 * @apiHeader Accept-Version="1.0.0"
 * @apiHeader Content-Type="application/json"
 * @apiError {number} status http status code: 500 to business logic errors and 401 to unauthorized
 * @apiError {string} error error description
 */

/**
 * @api {post} /register 01) Register user
 * @apiGroup Authentication
 * @apiName userRegister
 * @apiVersion 1.0.0
 * @apiUse auth
 * @apiParam {string} email valid user email
 * @apiParam {string} password must have at least one uppercase letter, one lowercase, one digit and a minimum 8 characters
 * @apiParam {string} name valid user name
 * @apiParam {string} birthdate (optional) user birthdate
 * @apiParam {string} phone (optional) must follow E.164 recommendation
 * @apiParam {string} country_code (optional) must follow the standard ISO 3166 alpha-2
 * @apiParam {string} photo (optional) user profile photo
 * @apiSuccess {string} token jwt valid for 8 hours and must be placed at "Authorization" header
 */
exports.register = function (req, res) {
    business.user.register(req.body).then(
        user => {
            business.utils.createToken(user).then(
                token => res.status(200).json({ token: token, user: user.id }),
                error => res.status(error.code).send(error.msg));
        },
        error => res.status(500).send(error.msg));
}

/**
 * @api {post} /login 02) Login user
 * @apiGroup Authentication
 * @apiName userLogin
 * @apiVersion 1.0.0
 * @apiUse auth
 * @apiParam {string} email valid email
 * @apiParam {string} password must have at least one uppercase letter, one lowercase, one digit and a minimum 8 characters
 * @apiSuccess {string} token jwt valid for 8 hours and must be placed at "Authorization" header
 * @apiSuccess {string} user user object with attributtes: id, name, email, photo, birthdate and country_code
 */
exports.login = function (req, res) {
    business.user.login(req.body).then(
        user => {
            business.utils.createToken(user).then(
                token => res.status(200).json({ token: token, user: user }),
                error => res.status(error.code).send(error.msg));
        },
        error => res.status(error.code).send(error.msg));
}

/**
 * @api {post} /chpass 03) Change password
 * @apiGroup Authentication
 * @apiName changePassword
 * @apiVersion 1.0.0
 * @apiUse auth
 * @apiHeader Authorization="< token >"
 * @apiParam {string} password new password
 * @apiSuccess {boolean} result return true if was sucessfuly updated
 */
exports.changePassword = function (req, res) {
    if (req.client) {
        business.user.changePassword(req.client, req.body).then(
            () => res.status(200).json({ result: true }),
            error => res.status(error.code).send(error.msg));
    } else {
        res.status(401).send("Unauthorized");
    }
}

/**
 * @api {post} /my/link 01) Add link
 * @apiGroup User
 * @apiName addLink
 * @apiVersion 1.0.0
 * @apiUse auth
 * @apiHeader Authorization="< token >"
 * @apiParam {string} url personal profile
 * @apiParam {integer} social social network array index
 * @apiSuccess {boolean} result return true if was sucessfuly updated
 */
exports.addLink = function (req, res) {
    if (req.client) {
        business.link.create(req.body, req.client).then(
            link => res.status(200).json({ link: link }),
            error => res.status(error.code).send(error.msg));
    } else {
        res.status(401).send("Unauthorized");
    }
}

/**
 * @api {delete} /my/link/:id 02) Remove link
 * @apiGroup User
 * @apiName removeLink
 * @apiVersion 1.0.0
 * @apiUse auth
 * @apiHeader Authorization="< token >"
 * @apiParam {string} :id link id to remove
 * @apiSuccess {boolean} result return true if was sucessfuly removed
 */
exports.removeLink = function (req, res) {
    if (req.client) {
        business.link.remove(req.params.id, req.client).then(
            () => res.status(200).json({ result: true }),
            error => res.status(error.code).send(error.msg));
    } else {
        res.status(401).send("Unauthorized");
    }
}

/**
 * @api {post} /my/experience 03) Add experience
 * @apiGroup User
 * @apiName addExperience
 * @apiVersion 1.0.0
 * @apiUse auth
 * @apiHeader Authorization="< token >"
 * @apiParam {string} institution institution,
   @apiParam {string} function function name,
   @apiParam {boolean} actual flag indicating if still doing function,
   @apiParam {date} initDate init function date,
   @apiParam {date} endDate end function date,
   @apiParam {string} description function description,
   @apiParam {boolean} is_education
 * @apiSuccess {boolean} result return true if was sucessfuly updated
 */
exports.addExperience = function (req, res) {
    if (req.client) {
        business.experience.create(req.body, req.client).then(
            experience => res.status(200).json({ experience: experience }),
            error => res.status(error.code).send(error.msg));
    } else {
        res.status(401).send("Unauthorized");
    }
}

/**
 * @api {delete} /my/experience/:id 04) Remove experience
 * @apiGroup User
 * @apiName removeExperience
 * @apiVersion 1.0.0
 * @apiUse auth
 * @apiHeader Authorization="< token >"
 * @apiParam {string} :id experience id to remove
 * @apiSuccess {boolean} result return true if was sucessfuly removed
 */
exports.removeExperience = function (req, res) {
    if (req.client) {
        business.experience.remove(req.params.id, req.client).then(
            () => res.status(200).json({ result: true }),
            error => res.status(error.code).send(error.msg));
    } else {
        res.status(401).send("Unauthorized");
    }
}

/**
 * @api {post} /my/skill 05) Add skill
 * @apiGroup User
 * @apiName addSkill
 * @apiVersion 1.0.0
 * @apiUse auth
 * @apiHeader Authorization="< token >"
 * @apiParam {string} name skill/tecnology name
 * @apiParam {integer} level skill level, (1-5)
 * @apiSuccess {boolean} result return true if was sucessfuly updated
 */
exports.addSkill = function (req, res) {
    if (req.client) {
        business.skill.addSkillToUser(req.body.name, req.body.level, req.client.id).then(
            skill => res.status(200).json({ skill: skill }),
            error => res.status(error.code).send(error.msg));
    } else {
        res.status(401).send("Unauthorized");
    }
}

/**
 * @api {delete} /my/skill/:id 06) Remove skill
 * @apiGroup User
 * @apiName removeSkill
 * @apiVersion 1.0.0
 * @apiUse auth
 * @apiHeader Authorization="< token >"
 * @apiParam {string} :id skill id to remove
 * @apiSuccess {boolean} result return true if was sucessfuly removed
 */
exports.removeSkill = function (req, res) {
    if (req.client) {
        business.skill.remove(req.params.id, req.client).then(
            () => res.status(200).json({ result: true }),
            error => res.status(error.code).send(error.msg));
    } else {
        res.status(401).send("Unauthorized");
    }
}