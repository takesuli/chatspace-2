# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :messages
- has_many :users_groups
- has_many :groups, though: :users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false ,foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belong_to :user
- belong_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|
### Association
- has_many :users_groups
- has_many :messages
- has_many :users, though: :users_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|text|
|text|text|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belong_to :user
- belong_to :group


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
